import Stripe from "stripe";

export const dynamic = "force-dynamic";

const products = {
  "combat-system": "Combat System",
  "sword-pack": "Sword Bundle Pack",
  "fantasy-lobby-map": "Fantasy Lobby Map",
} as const;

export default async function PurchaseSuccess({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  const secretKey = process.env.STRIPE_SECRET_KEY;
  let productName = "";
  let paid = false;

  if (sessionId && secretKey) {
    try {
      const stripe = new Stripe(secretKey, {
        httpClient: Stripe.createFetchHttpClient(),
        telemetry: false,
      });
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      const productId = session.metadata?.productId as keyof typeof products | undefined;
      paid = session.payment_status === "paid" && !!productId && productId in products;
      if (paid && productId) productName = products[productId];
    } catch (error) {
      console.error("Purchase verification error:", error);
    }
  }

  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="/"><img className="brandLogo" src="/TransparentLogoRS.png" alt="" aria-hidden="true" /><span>RYUKUMA STUDIOS</span></a>
        <nav className="navLinks"><a href="/">Home</a><a href="/contact">Contact Us</a><a href="/terms">Terms &amp; Refunds</a></nav>
      </header>
      <section className="successPage shell">
        {paid && sessionId ? (
          <div className="successCard">
            <div className="successIcon">✓</div>
            <div className="eyebrow">PAYMENT CONFIRMED</div>
            <h1>Thank you for your purchase.</h1>
            <p>Your <strong>{productName}</strong> is ready. Use the button below to download the files included with your purchase.</p>
            <a className="downloadButton" href={`/api/download?session_id=${encodeURIComponent(sessionId)}`}>Download {productName}<span>↓</span></a>
            <p className="successHelp">Keep your purchase confirmation for your records. If you have any delivery problems, contact Ryukuma Studios through our <a href="/contact">support page</a>.</p>
          </div>
        ) : (
          <div className="successCard">
            <div className="eyebrow">PURCHASE VERIFICATION</div>
            <h1>We couldn't verify this purchase.</h1>
            <p>No confirmed paid order was found for this link. If you were charged, please contact us and we'll verify the transaction.</p>
            <a className="secondaryButton" href="/contact">Contact Support</a>
          </div>
        )}
      </section>
    </main>
  );
}
