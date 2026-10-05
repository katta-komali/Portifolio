import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid">

        {/* PROFILE PHOTO - LEFT SIDE */}
        <div className="hero-photo-wrap reveal">
          <div className="hero-profile-photo">
            <img
              src="/komali-profile-photo.jpeg"
              alt="Katta Komali profile photo"
            />
          </div>
        </div>

        {/* HERO CONTENT - RIGHT SIDE */}
        <div className="hero-content reveal">
          <p className="eyebrow">
            SOFTWARE DEVELOPER · HYDERABAD, INDIA
          </p>

          {/* BIG NAME */}
          <h1 className="hero-name">
            Katta Komali
          </h1>

          {/* SMALLER PROFESSIONAL TAGLINE */}
          <h2 className="hero-tagline">
            Building clean, useful software.
          </h2>

          <p className="hero-description">
            I&apos;m Katta Komali, a Software Developer with a B.Tech in
            Electrical and Electronics Engineering and technical skills in
            Python, Flask, HTML, CSS, and MySQL.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View my work <span>↗</span>
            </a>

            <a href="#contact" className="secondary-button">
              Let&apos;s talk
            </a>
          </div>

          <div
            className="hero-links"
            aria-label="Professional links"
          >
            <a
              href="https://github.com/katta-komali"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/komali-katta-50b6b8320"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:komali.katta2004@gmail.com">
              Email ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;