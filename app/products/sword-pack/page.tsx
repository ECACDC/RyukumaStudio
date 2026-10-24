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
          <div className="videoCard">
            <iframe className="demoVideo" src="https://www.youtube.com/embed/o6KJT7hRxPU" title="Fantasy Sword Bundle Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
          <div className="detailsCard">
            <p className="detailsLead">A pack of 14 custom-made swords, ready to use in Roblox Studio.</p>
            <ul className="featureList">{features.map((feature) => <li key={feature}><span className="check">✓</span><span>{feature}</span></li>)}</ul>
            <p className="robuxInfo">Paying with Robux? Price: <strong>R$2999</strong>. Do not use the checkout below. You must cover the Roblox tax. <a href="/contact">Contact us</a> on Discord instead.</p>
            <form action="/api/checkout" method="POST">
              <input type="hidden" name="productId" value="sword-pack" />
              <button className="buyButton" type="submit"><span>Buy with USD — $5.99</span><span>→</span></button>
            </form>
            <p className="purchaseNote">USD checkout only. Secure checkout through Stripe.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
