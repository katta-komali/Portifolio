import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Katta Komali</h3>
          <p>Software Developer with skills in Python, Flask, HTML, CSS, and MySQL.</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://www.linkedin.com/in/komali-katta-50b6b8320" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Katta Komali. All rights reserved.</p>
        <a href="mailto:komali.katta2004@gmail.com">komali.katta2004@gmail.com</a>
      </div>
    </footer>
  );
}

export default Footer;
