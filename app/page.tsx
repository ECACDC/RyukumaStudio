const products = [
  {
    name: "Combat System",
    usd: "$5.99",
    robux: "R$2999",
    href: "/products/combat-system",
    preview: "/tsb-combat-system-cover.png",
    type: "image",
  },
  {
    name: "Sword Pack",
    usd: "$5.99",
    robux: "R$2999",
    href: "/products/sword-pack",
    preview: "/sword-pack-cover.jpg",
    type: "image",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="/" aria-label="Ryukuma Studios home">
          <span className="brandMark">R</span>
          <span>RYUKUMA STUDIOS</span>
        </a>
        <nav className="navLinks">
          <a href="/">Home</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </header>

      <div className="robuxNotice shell">
        <strong>
          For a limited time, we accept Robux payments. You must cover the Roblox tax.
          If you want to pay with Robux, do not use the checkout on the product page —{" "}
          <a href="/contact">contact us</a> on our Discord server instead.
        </strong>
      </div>

      <section className="storeHeader shell">
        <h1>Assets</h1>
        <p>Browse Roblox systems, packs, and assets.</p>
      </section>

      <section className="catalog shell">
        <div className="assetGrid">
          {products.map((product) => (
            <a className="assetCard" href={product.href} key={product.name}>
              <div className="assetPreview">
                <img src={product.preview} alt={product.name} />
                <div className="assetOverlay">
                  <div className="assetOverlayContent">
                    <div className="assetName">{product.name}</div>
                    <div className="assetPrice">{product.usd} · {product.robux}</div>
                  </div>
                </div>
              </div>
            </a>
          ))}
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
