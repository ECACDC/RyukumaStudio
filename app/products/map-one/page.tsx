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
        <nav className="navLinks"><a href="/">Home</a><a href="/contact">Contact Us</a><a href="/terms">Terms & Refunds</a></nav>
      </header>
      <section className="detailPage shell">
        <a className="backButton" href="/" aria-label="Back to store">‹</a>
        <div className="detailTop">
          <div><div className="eyebrow">MAP</div><h1>Fantasy Lobby Map</h1></div>
          <div className="price">FREE <span>TESTING</span></div>
        </div>
        <div className="detailGrid">
          <div className="videoCard">
            <iframe className="demoVideo" src="https://www.youtube.com/embed/xZR2SwN6T-M" title="Fantasy Lobby Map Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
          <div className="detailsCard">
            <p className="detailsLead">A high-quality fantasy Roblox lobby map built completely from scratch and optimized for Roblox.</p>
            <ul className="featureList">{features.map((feature) => <li key={feature}><span className="check">✓</span><span>{feature}</span></li>)}</ul>
            <a className="buyButton" href="/api/download?productId=fantasy-lobby-map"><span>Download Free</span><span>↓</span></a>
            <p className="purchaseNote">Temporarily free for Ryukuma Studios download testing.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
