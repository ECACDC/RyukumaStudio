const features = [
  "Optimized for Roblox.",
  "20+ custom rooms, fully decorated.",
  "Easy to implement into your game.",
];

export default function HorrorFacilityPage() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="/"><img className="brandLogo" src="/TransparentLogoRS.png" alt="" aria-hidden="true" /><span>RYUKUMA STUDIOS</span></a>
        <nav className="navLinks"><a href="/">Home</a><a href="/contact">Contact Us</a><a href="/terms">Terms &amp; Refunds</a></nav>
      </header>
      <section className="detailPage shell">
        <a className="backButton" href="/" aria-label="Back to store">‹</a>
        <div className="detailTop">
          <div><div className="eyebrow">MAP</div><h1>Horror Facility</h1></div>
          <div className="price">$9.99 <span>USD</span><span className="robuxPrice">R$3999</span></div>
        </div>
        <div className="detailGrid">
          <div className="videoCard">
            <iframe className="demoVideo" src="https://www.youtube.com/embed/qPPLc4leNi4" title="Horror Facility Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
          <div className="detailsCard">
            <p className="detailsLead">A fully decorated horror facility map built for Roblox and designed to be easy to add to your game.</p>
            <ul className="featureList">{features.map((feature) => <li key={feature}><span className="check">✓</span><span>{feature}</span></li>)}</ul>
            <p className="robuxInfo">Paying with Robux? Price: <strong>R$3999</strong>. Do not use the checkout below. You must cover the Roblox tax. <a href="/contact">Contact us</a> on Discord instead.</p>
            <form action="/api/checkout" method="POST">
              <input type="hidden" name="productId" value="horror-facility" />
              <label className="termsAgreement">
                <input type="checkbox" name="termsAccepted" value="2026-10-24" required />
                <span>I have read and agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Use &amp; Refund Policy</a>, including the digital-product refund policy.</span>
              </label>
              <button className="buyButton" type="submit"><span>Buy with USD — $9.99</span><span>→</span></button>
            </form>
            <p className="purchaseNote">Digital product. Sales are generally final once delivered, except where required by law or covered by our Refund Policy. Secure USD checkout through Stripe.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
