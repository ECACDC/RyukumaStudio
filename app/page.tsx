const products = [
  {
    name: "Combat System",
    usd: "$5.99",
    robux: "R$2999",
    href: "/products/combat-system",
    preview: "/tsb-combat-system-cover.png",
  },
  {
    name: "Sword Pack",
    usd: "$5.99",
    robux: "R$2999",
    href: "/products/sword-pack",
    preview: "/sword-pack-cover.jpg",
  },
  {
    name: "Fantasy Lobby Map",
    usd: "$19.99",
    robux: "R$6999",
    href: "/products/map-one",
    preview: "/fantasy-map-lobby-cover.png",
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
        <strong>Ryukuma Studios Asset Store</strong>
        <img className="heroStudioLogo" src="/RyukumaFavicon.png" alt="Ryukuma Studios RS logo" />
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
                    <div className="assetPrice">
                      {product.usd}{product.robux ? ` · ${product.robux}` : ""}
                    </div>
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
