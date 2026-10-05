import { useEffect, useState } from "react";
import "./Navbar.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Resume", id: "resume" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={() => handleLinkClick("home")}>
          <span>KK</span>
          <strong>Komali</strong>
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
        </button>

        <div
          id="primary-navigation"
          className={`navbar-links ${menuOpen ? "active" : ""}`}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => handleLinkClick(item.id)}
            >
              {item.label}
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
