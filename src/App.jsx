import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="header">
        <a href="#home" className="logo-area">
          <img
            src="/logo.png"
            alt="Scheiner Digital Solutions"
            className="logo"
          />
          <span className="brand">Scheiner Digital Solutions</span>
        </a>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#services">Products</a>
          <a href="#about">About</a>
          <a href="#contact" className="nav-contact">
            Contact
          </a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">SCHEINER DIGITAL SOLUTIONS</p>

            <h1>
              Digital solutions
              <br />
              built for <span>real impact.</span>
            </h1>

            <p className="hero-description">
              Practical digital products and experiences built for education,
              sports, and beyond.
            </p>

            <div className="hero-actions">
              <a href="#services" className="button button-primary">
                Explore our products
                <span aria-hidden="true">→</span>
              </a>

              <a href="#about" className="button button-secondary">
                About SDS
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="logo-glow"></div>

            <img
              src="/logo.png"
              alt=""
              className="hero-logo"
            />
          </div>
        </div>

        <div className="hero-categories">
          <span>EDUCATION</span>
          <span className="category-dot"></span>
          <span>SPORTS</span>
          <span className="category-dot"></span>
          <span>SOFTWARE</span>
        </div>
      </section>

      <section id="services" className="products-section">
        <div className="products-heading">
          <p className="section-eyebrow">OUR PRODUCTS</p>

          <h2>Built for real-world use.</h2>

          <p>
            Practical tools designed for education, sports, and hands-on digital
            experiences.
          </p>
        </div>

        <div className="products-grid">
          <article className="product-card">
            <div className="product-copy">
              <span className="product-tag">EDUCATION</span>

              <h3>Rapid Response Assessment™</h3>

              <p>
                A digital assessment platform for K-12 and college educators to
                quickly evaluate their students' knowledge.
              </p>

              <a href="#contact" className="product-link">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="product-visual product-visual-education">
              <div className="visual-card">
                <span className="visual-label">ASSESSMENT</span>
                <strong>Fast feedback.</strong>
                <p>Clearer insight into student understanding.</p>
              </div>
            </div>
          </article>

          <article className="product-card">
            <div className="product-copy">
              <span className="product-tag">SPORTS</span>

              <h3>Baseball Game Creator</h3>

              <p>
                A Microsoft Store-certified app that allows users to create a
                baseball game based on their own lineups and where they throw
                the ball.
              </p>

              <a
                href="https://apps.microsoft.com/detail/9n533p4jf5f9?hl=en-US&gl=US"
                target="_blank"
                rel="noopener noreferrer"
                className="product-link"
              >
                View on Microsoft Store <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="product-visual product-visual-sports">
              <div className="baseball-field">
                <div className="diamond"></div>
                <div className="base"></div>
                <div className="base base-two"></div>
                <div className="base base-three"></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Scheiner Digital Solutions</p>
      </footer>
    </div>
  );
}