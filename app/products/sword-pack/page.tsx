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
        <a className="brand" href="/"><img className="brandLogo" src="/TransparentLogoRS.png" alt="" aria-hidden="true" /><span>RYUKUMA STUDIOS</span></a>
        <nav className="navLinks"><a href="/">Home</a><a href="/contact">Contact Us</a><a href="/terms">Terms & Refunds</a></nav>
      </header>
      <section className="detailPage shell">
        <a className="backButton" href="/" aria-label="Back to store">‹</a>
        <div className="detailTop">
          <div><div className="eyebrow">MODELS</div><h1>Sword Pack</h1></div>
          <div className="price">FREE <span>TESTING</span></div>
        </div>
        <div className="detailGrid">
          <div className="videoCard">
            <iframe className="demoVideo" src="https://www.youtube.com/embed/o6KJT7hRxPU" title="Fantasy Sword Bundle Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
          <div className="detailsCard">
            <p className="detailsLead">A pack of 14 custom-made swords, ready to use in Roblox Studio.</p>
            <ul className="featureList">{features.map((feature) => <li key={feature}><span className="check">✓</span><span>{feature}</span></li>)}</ul>
            <a className="buyButton" href="/api/download?productId=sword-pack"><span>Download Free</span><span>↓</span></a>
            <p className="purchaseNote">Temporarily free for Ryukuma Studios download testing.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
