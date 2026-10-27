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
        <a className="brand" href="/"><img className="brandLogo" src="/TransparentLogoRS.png" alt="" aria-hidden="true" /><span>RYUKUMA STUDIOS</span></a>
        <nav className="navLinks"><a href="/">Home</a><a href="/contact">Contact Us</a><a href="/terms">Terms & Refunds</a></nav>
      </header>
      <section className="detailPage shell">
        <a className="backButton" href="/" aria-label="Back to store">‹</a>
        <div className="detailTop">
          <div><div className="eyebrow">COMBAT</div><h1>Combat System</h1></div>
          <div className="price">FREE <span>TESTING</span></div>
        </div>
        <div className="detailGrid">
          <div className="videoCard"><video className="demoVideo" src="/combat-system-demo.mp4" controls playsInline preload="metadata" /></div>
          <div className="detailsCard">
            <p className="detailsLead">A configurable Roblox combat system with custom animations and organized code.</p>
            <ul className="featureList">{features.map((feature) => <li key={feature}><span className="check">✓</span><span>{feature}</span></li>)}</ul>
            <a className="buyButton" href="/api/download?productId=combat-system"><span>Download Free</span><span>↓</span></a>
            <p className="purchaseNote">Temporarily free for Ryukuma Studios download testing.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
