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
        <a className="brand" href="/"><span className="brandMark">R</span><span>RYUKUMA STUDIOS</span></a>
        <nav className="navLinks"><a href="/">Home</a><a href="/contact">Contact Us</a></nav>
      </header>

      <section className="detailPage shell">
        <div className="detailTop">
          <div><div className="eyebrow">MAP</div><h1>Map One</h1></div>
          <div className="price">$19.99 <span>USD</span></div>
        </div>

        <div className="detailGrid">
          <div className="videoCard">
            <img src="/map-one-cover.png" alt="Map One" className="demoVideo" />
          </div>

          <div className="detailsCard">
            <p className="detailsLead">
              A high-quality Roblox map built completely from scratch and optimized for Roblox.
            </p>

            <ul className="featureList">
              {features.map((feature) => <li key={feature}><span className="check">✓</span><span>{feature}</span></li>)}
            </ul>

            <button className="buyButton" type="button" disabled>
              <span>Buy — $19.99</span><span>→</span>
            </button>
            <p className="purchaseNote">Checkout will be connected next.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
