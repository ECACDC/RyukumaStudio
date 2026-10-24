const features = [
  "Optimized for Roblox.",
  "100% custom-made by Ryukuma Studios.",
  "No external Toolbox models used.",
  "High-quality environment and assets.",
  "Affordable complete map package.",
];

export default function MapOnePage() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="/"><img className="brandLogo" src="/TransparentLogoRS.png" alt="" aria-hidden="true" /><span>RYUKUMA STUDIOS</span></a>
        <nav className="navLinks"><a href="/">Home</a><a href="/contact">Contact Us</a></nav>
      </header>
      <section className="detailPage shell">\n        <a className="backButton" href="/" aria-label="Back to store">‹</a>
        <div className="detailTop">
          <div><div className="eyebrow">MAP</div><h1>Fantasy Lobby Map</h1></div>
          <div className="price">$19.99 <span>USD</span><span className="robuxPrice">R$6999</span></div>
        </div>
        <div className="detailGrid">
          <div className="videoCard">
            <iframe className="demoVideo" src="https://www.youtube.com/embed/xZR2SwN6T-M" title="Fantasy Lobby Map Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
          <div className="detailsCard">
            <p className="detailsLead">A high-quality fantasy Roblox lobby map built completely from scratch and optimized for Roblox.</p>
            <ul className="featureList">{features.map((feature) => <li key={feature}><span className="check">✓</span><span>{feature}</span></li>)}</ul>
            <p className="robuxInfo">Paying with Robux? Price: <strong>R$6999</strong>. Do not use the checkout below. You must cover the Roblox tax. <a href="/contact">Contact us</a> on Discord instead.</p>
            <form action="/api/checkout" method="POST">
              <input type="hidden" name="productId" value="fantasy-lobby-map" />
              <button className="buyButton" type="submit"><span>Buy with USD — $19.99</span><span>→</span></button>
            </form>
            <p className="purchaseNote">USD checkout only. Secure checkout through Stripe.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
