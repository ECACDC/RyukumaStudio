const products = [
  {
    name: "Combat System",
    price: "$5.99",
    href: "/products/combat-system",
    preview: "/combat-system-demo.mp4",
    type: "video",
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
        <span className="navText">Roblox Assets</span>
      </header>

      <section className="storeHeader shell">
        <h1>Assets</h1>
        <p>Browse Roblox systems, packs, and assets.</p>
      </section>

      <section className="catalog shell">
        <div className="assetGrid">
          {products.map((product) => (
            <a className="assetCard" href={product.href} key={product.name}>
              <div className="assetPreview">
                {product.type === "video" ? (
                  <video src={product.preview} muted playsInline preload="metadata" />
                ) : null}
                <div className="assetOverlay">
                  <div>
                    <div className="assetName">{product.name}</div>
                    <div className="assetPrice">{product.price}</div>
                  </div>
                  <span className="assetArrow">→</span>
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
