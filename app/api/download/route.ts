import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const files = {
  "combat-system": { key: "combat-system.rbxl", filename: "Ryukuma-Combat-System.rbxl", type: "application/octet-stream" },
  "sword-pack": { key: "sword-bundle.zip", filename: "Ryukuma-Sword-Bundle.zip", type: "application/zip" },
  "fantasy-lobby-map": { key: "fantasy-lobby-map.rbxl", filename: "Ryukuma-Fantasy-Lobby-Map.rbxl", type: "application/octet-stream" },
} as const;

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!sessionId || !secretKey) {
    return NextResponse.json({ error: "Invalid download request." }, { status: 400 });
  }

  try {
    const stripe = new Stripe(secretKey, {
      httpClient: Stripe.createFetchHttpClient(),
      telemetry: false,
    });
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment has not been confirmed." }, { status: 403 });
    }

    const productId = session.metadata?.productId as keyof typeof files | undefined;
    if (!productId || !(productId in files)) {
      return NextResponse.json({ error: "No downloadable product was found for this purchase." }, { status: 404 });
    }

    const file = files[productId];
    const { env } = getCloudflareContext();
    const bucket = (env as unknown as { PAID_ASSETS: R2Bucket }).PAID_ASSETS;
    const object = await bucket.get(file.key);

    if (!object) {
      console.error("Paid asset missing from R2:", file.key);
      return NextResponse.json({ error: "The purchased file is temporarily unavailable. Please contact support." }, { status: 503 });
    }

    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("Content-Type", file.type);
    headers.set("Content-Disposition", `attachment; filename="${file.filename}"`);
    headers.set("Cache-Control", "private, no-store");
    if (object.size) headers.set("Content-Length", String(object.size));

    return new Response(object.body, { headers });
  } catch (error) {
    console.error("Secure download error:", error);
    return NextResponse.json({ error: "Unable to verify this purchase." }, { status: 500 });
  }
}
