const features = [
  "14 custom-made swords.",
  "Ready to use in Roblox Studio.",
  "FBX files included.",
  "RBXL files included.",
];

export default function SwordPackPage() {
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
            <div className="eyebrow">MODELS</div>
            <h1>Sword Pack</h1>
          </div>
          <div className="price">$5.99 <span>USD</span></div>
        </div>

        <div className="detailGrid">
          <div className="videoCard">
            <video className="demoVideo" src="/sword-pack-demo.mp4" controls playsInline preload="metadata">
              Your browser does not support embedded video.
            </video>
          </div>

          <div className="detailsCard">
            <p className="detailsLead">
              A pack of 14 custom-made swords, ready to use in Roblox Studio.
            </p>

            <ul className="featureList">
              {features.map((feature) => (
                <li key={feature}>
                  <span className="check">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a className="buyButton" href="https://buy.stripe.com/test_8x2eVd0qlgjx8uzgKQbwk01" target="_blank" rel="noopener noreferrer">
              <span>Buy — $5.99</span>
              <span>→</span>
            </a>
            <p className="purchaseNote">Stripe test checkout — no real money is charged.</p>
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
