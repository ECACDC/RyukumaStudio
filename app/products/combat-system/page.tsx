const features = [
  "Custom-made animations.",
  "Clean scripts using ModuleScripts.",
  "Easy to configure dashes, damage, speed, cooldowns, and more.",
  "Made to be easy to edit and drop into your own game.",
];

export default function CombatSystemPage() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="/" aria-label="Ryukuma Studios home">
          <span className="brandMark">R</span>
          <span>RYUKUMA STUDIOS</span>
        </a>
        <a className="navText" href="/">← Back to assets</a>
      </header>

      <section className="detailPage shell">
        <div className="detailTop">
          <div>
            <div className="eyebrow">COMBAT</div>
            <h1>Combat System</h1>
          </div>
          <div className="price">$5.99 <span>USD</span></div>
        </div>

        <div className="detailGrid">
          <div className="videoCard">
            <video className="demoVideo" src="/combat-system-demo.mp4" controls playsInline preload="metadata">
              Your browser does not support embedded video.
            </video>
          </div>

          <div className="detailsCard">
            <p className="detailsLead">
              A configurable Roblox combat system with custom animations and organized code.
            </p>

            <ul className="featureList">
              {features.map((feature) => (
                <li key={feature}>
                  <span className="check">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <form action="/api/checkout" method="POST">
              <button className="buyButton" type="submit">
                Buy — $5.99
                <span>→</span>
              </button>
            </form>
            <p className="purchaseNote">Secure checkout through Stripe.</p>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand footerBrand">
          <span className="brandMark">R</span>
          <span>RYUKUMA STUDIOS</span>
        </div>
        <p>© 2026 Ryukuma Studios</p>
      </footer>
    </main>
  );
}
