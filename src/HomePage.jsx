import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">Your Church Name</div>
        <nav>
          <a href="#about">About</a>
          <a href="#beliefs">Beliefs</a>
          <a href="#worship">Worship</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome to Our Church</h1>
        <p>A place of faith, hope, and community</p>
        <button>Visit Us</button>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Our Church</h2>
        <p>
          We are a community centered on love, faith, and service. Everyone is
          welcome to worship and grow together.
        </p>
      </section>

      {/* BELIEFS */}
      <section id="beliefs" className="section light">
        <h2>What We Believe</h2>
        <div className="cards">
          <div className="card">Faith in God</div>
          <div className="card">Love for All</div>
          <div className="card">Service to Others</div>
        </div>
      </section>

      {/* WORSHIP */}
      <section id="worship" className="section">
        <h2>Worship With Us</h2>
        <p>Join us every Sunday for worship, prayer, and fellowship.</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section light">
        <h2>Contact Us</h2>
        <p>Email: info@yourchurch.org</p>
        <p>Location: Your City</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Church Of Christ Bikkavolu</p>
      </footer>
    </div>
  );
}
