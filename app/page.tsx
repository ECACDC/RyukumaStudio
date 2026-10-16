const features = [
  "Every animation is custom-made for the combat system.",
  "Clean, organized scripts built around reusable ModuleScripts.",
  "Easy configuration for dash distance, damage, movement speed, cooldowns, and more.",
  "Designed to be readable, editable, and quick to integrate into your own Roblox experience.",
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Ryukuma Studios home">
          <span className="brandMark">R</span>
          <span>RYUKUMA STUDIOS</span>
        </a>
        <a className="navLink" href="#product">Combat System</a>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow">ROBLOX DEVELOPMENT ASSETS</div>
        <h1>Build faster.<br />Fight better.</h1>
        <p className="heroCopy">
          High-quality Roblox systems made for developers who want polished gameplay
          without rebuilding everything from scratch.
        </p>
        <a className="primaryButton" href="#product">View Combat System</a>
      </section>

      <section className="productSection shell" id="product">
        <div className="productIntro">
          <div>
            <div className="eyebrow">FEATURED ASSET</div>
            <h2>Combat System</h2>
          </div>
          <div className="price">$5.99 <span>USD</span></div>
        </div>

        <div className="productGrid">
          <div className="videoCard">
            <video
              className="demoVideo"
              src="/combat-system-demo.mp4"
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support embedded video.
            </video>
            <div className="videoLabel">
              <span className="liveDot" />
              Gameplay demo
            </div>
          </div>

          <div className="detailsCard">
            <div className="badge">ONE-TIME PURCHASE</div>
            <h3>A clean foundation for responsive Roblox combat.</h3>
            <p className="detailsLead">
              Drop a polished combat framework into your project and tune the important
              gameplay values without digging through messy code.
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
                Buy Combat System — $5.99
                <span>→</span>
              </button>
            </form>
            <p className="purchaseNote">Secure checkout powered by Stripe. No account required.</p>
          </div>
        </div>
      </section>

      <section className="promise shell">
        <div>
          <span className="promiseNumber">01</span>
          <h4>Built for developers</h4>
          <p>Readable structure, simple configuration, and no unnecessary clutter.</p>
        </div>
        <div>
          <span className="promiseNumber">02</span>
          <h4>Instant access</h4>
          <p>Once payments are connected, purchases can deliver the files automatically.</p>
        </div>
        <div>
          <span className="promiseNumber">03</span>
          <h4>Made by Ryukuma</h4>
          <p>Systems created from real Roblox development experience.</p>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand footerBrand">
          <span className="brandMark">R</span>
          <span>RYUKUMA STUDIOS</span>
        </div>
        <p>© 2026 Ryukuma Studios. Roblox is a trademark of Roblox Corporation.</p>
      </footer>
    </main>
  );
}
