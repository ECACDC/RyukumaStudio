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
        <a className="brand" href="/"><span className="brandMark">R</span><span>RYUKUMA STUDIOS</span></a>
        <nav className="navLinks"><a href="/">Home</a><a href="/contact">Contact Us</a></nav>
      </header>

      <section className="detailPage shell">
        <div className="detailTop">
          <div><div className="eyebrow">MODELS</div><h1>Sword Pack</h1></div>
          <div className="price">$5.99 <span>USD</span><span className="robuxPrice">R$2999</span></div>
        </div>

        <div className="detailGrid">
          <div className="videoCard"><video className="demoVideo" src="/sword-pack-demo.mp4" controls playsInline preload="metadata" /></div>
          <div className="detailsCard">
            <p className="detailsLead">A pack of 14 custom-made swords, ready to use in Roblox Studio.</p>
            <ul className="featureList">
              {features.map((feature) => <li key={feature}><span className="check">✓</span><span>{feature}</span></li>)}
            </ul>

            <p className="robuxInfo">
              Paying with Robux? Price: <strong>R$2999</strong>. Do not use the checkout below.
              You must cover the Roblox tax. <a href="/contact">Contact us</a> on Discord instead.
            </p>

            <a className="buyButton" href="https://buy.stripe.com/test_8x2eVd0qlgjx8uzgKQbwk01" target="_blank" rel="noopener noreferrer">
              <span>Buy with USD — $5.99</span><span>→</span>
            </a>
            <p className="purchaseNote">USD checkout only. Stripe test checkout.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
