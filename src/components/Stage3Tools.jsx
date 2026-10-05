import { useEffect, useState } from "react";
import "../styles/stage3.css";

function Stage3Tools() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("komali-theme") === "dark");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", darkMode);
    localStorage.setItem("komali-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setDarkMode((value) => !value)}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        title={darkMode ? "Light mode" : "Dark mode"}
      >
        {darkMode ? "☀" : "☾"}
      </button>
    </>
  );
}

export default Stage3Tools;
