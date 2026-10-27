import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const products = {
  "combat-system": {
    name: "Ryukuma Studios Combat System",
    description: "Roblox combat system with custom animations and configurable modules.",
    unitAmount: 599,
  },
  "sword-pack": {
    name: "Ryukuma Studios Sword Bundle Pack",
    description: "Bundle of 14 custom Roblox-ready swords with RBXL and FBX files.",
    unitAmount: 599,
  },
  "fantasy-lobby-map": {
    name: "Ryukuma Studios Fantasy Lobby Map",
    description: "Custom fantasy lobby map built and optimized for Roblox.",
    unitAmount: 1999,
  },
} as const;

type ProductId = keyof typeof products;

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: "Checkout is not configured yet." },
      { status: 503 }
    );
  }

  const formData = await request.formData();
  const productId = formData.get("productId");
  const termsAccepted = formData.get("termsAccepted");

  if (typeof productId !== "string" || !(productId in products)) {
    return NextResponse.json({ error: "Invalid product." }, { status: 400 });
  }

  if (termsAccepted !== "2026-10-24") {
    return NextResponse.json(
      { error: "You must agree to the Terms of Use & Refund Policy before purchasing." },
      { status: 400 }
    );
  }

  const product = products[productId as ProductId];
  const stripe = new Stripe(secretKey, {
    httpClient: Stripe.createFetchHttpClient(),
    telemetry: false,
  });
  const origin = request.nextUrl.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: product.unitAmount,
            product_data: {
              name: product.name,
              description: product.description,
              metadata: {
                productId,
              },
            },
          },
        },
      ],
      metadata: {
        productId,
        termsAccepted: "true",
        termsVersion: "2026-10-24",
      },
      success_url: `${origin}/purchase/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/products/${productId === "fantasy-lobby-map" ? "map-one" : productId}`,
      billing_address_collection: "auto",
      allow_promotion_codes: false,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Unable to start checkout." }, { status: 500 });
    }

    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    console.error("Stripe Checkout error:", error);
    return NextResponse.json(
      { error: "Unable to start checkout. Please try again." },
      { status: 500 }
    );
  }
}
