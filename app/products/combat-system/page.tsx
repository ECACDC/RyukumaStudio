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
        <nav className="navLinks"><a href="/">Home</a><a href="/contact">Contact Us</a></nav>
      </header>
      <section className="detailPage shell">
        <a className="backButton" href="/" aria-label="Back to store">‹</a>
        <div className="detailTop">
          <div><div className="eyebrow">COMBAT</div><h1>Combat System</h1></div>
          <div className="price">$5.99 <span>USD</span><span className="robuxPrice">R$2999</span></div>
        </div>
        <div className="detailGrid">
          <div className="videoCard"><video className="demoVideo" src="/combat-system-demo.mp4" controls playsInline preload="metadata" /></div>
          <div className="detailsCard">
            <p className="detailsLead">A configurable Roblox combat system with custom animations and organized code.</p>
            <ul className="featureList">{features.map((feature) => <li key={feature}><span className="check">✓</span><span>{feature}</span></li>)}</ul>
            <p className="robuxInfo">Paying with Robux? Price: <strong>R$2999</strong>. Do not use the checkout below. You must cover the Roblox tax. <a href="/contact">Contact us</a> on Discord instead.</p>
            <form action="/api/checkout" method="POST">
              <input type="hidden" name="productId" value="combat-system" />
              <button className="buyButton" type="submit"><span>Buy with USD — $5.99</span><span>→</span></button>
            </form>
            <p className="purchaseNote">USD checkout only. Secure checkout through Stripe.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
