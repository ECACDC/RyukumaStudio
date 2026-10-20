export default function ContactPage() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="/"><span className="brandMark">R</span><span>RYUKUMA STUDIOS</span></a>
        <nav className="navLinks"><a href="/">Home</a><a href="/contact">Contact Us</a></nav>
      </header>

      <section className="contactPage shell">
        <h1>Join our Discord server!</h1>
        <p>
          Join our discord server for updates, help, and information. If you need help with a purchase
          or wish to pay with Robux, you can contact <strong>ryukumasasuke</strong> or <strong>ryukumanaruto</strong> there!
        </p>
        <a className="discordButton" href="https://discord.gg/4QQ32n882" target="_blank" rel="noopener noreferrer">
          Join our server
        </a>
      </section>
    </main>
  );
}
