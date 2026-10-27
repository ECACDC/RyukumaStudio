import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { AwsClient } from "aws4fetch";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const files = {
  "combat-system": { key: "combat-system.rbxl" },
  "sword-pack": { key: "sword-bundle.zip" },
  "fantasy-lobby-map": { key: "fantasy-lobby-map.rbxl" },
} as const;

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");
  const stripeSecret = process.env.STRIPE_SECRET_KEY;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  const accountId = process.env.R2_ACCOUNT_ID;

  if (!sessionId || !stripeSecret) {
    return NextResponse.json({ error: "Invalid download request." }, { status: 400 });
  }

  if (!accessKeyId || !secretAccessKey || !accountId) {
    console.error("R2 signing credentials are not configured.");
    return NextResponse.json({ error: "Downloads are temporarily unavailable." }, { status: 503 });
  }

  try {
    const stripe = new Stripe(stripeSecret, {
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
    const client = new AwsClient({
      service: "s3",
      region: "auto",
      accessKeyId,
      secretAccessKey,
    });

    const objectUrl =
      `https://${accountId}.r2.cloudflarestorage.com/ryukuma-paid-assets/${encodeURIComponent(file.key)}?X-Amz-Expires=300`;

    const signedRequest = await client.sign(new Request(objectUrl), {
      aws: { signQuery: true },
    });

    return NextResponse.redirect(signedRequest.url.toString(), 302);
  } catch (error) {
    console.error("Secure download error:", error);
    return NextResponse.json({ error: "Unable to verify this purchase." }, { status: 500 });
  }
}
