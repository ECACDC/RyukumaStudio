import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json(
      { error: "Checkout is not configured yet." },
      { status: 503 }
    );
  }

  const stripe = new Stripe(secretKey);
  const origin = request.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: 599,
          product_data: {
            name: "Ryukuma Studios Combat System",
            description: "Roblox combat system with custom animations and configurable modules.",
          },
        },
      },
    ],
    success_url: `${origin}/?purchase=success`,
    cancel_url: `${origin}/#product`,
    billing_address_collection: "auto",
    allow_promotion_codes: false,
  });

  if (!session.url) {
    return NextResponse.json({ error: "Unable to start checkout." }, { status: 500 });
  }

  return NextResponse.redirect(session.url, 303);
}
