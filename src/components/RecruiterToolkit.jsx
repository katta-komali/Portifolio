import "./RecruiterToolkit.css";

const facts = [
  ["Role", "Software Developer"],
  ["Degree", "B.Tech (EEE) · 7.8 CGPA"],
  ["Diploma", "EEE · 7.27 CGPA"],
  ["Skills", "Python · Flask · HTML · CSS · MySQL"],
];

function RecruiterToolkit() {
  return (
    <section className="recruiter-section" id="resume" aria-labelledby="recruiter-title">
      <div className="recruiter-container">
        <div className="recruiter-copy reveal">
          <p className="recruiter-kicker">RECRUITER TOOLKIT</p>
          <h2 id="recruiter-title">Everything you need to <span>review my profile.</span></h2>
          <p>
            A concise profile based on my current resume, including education,
            technical skills, project work, and certifications.
          </p>
          <div className="recruiter-actions">
            <a className="recruiter-primary" href="/Komali-Katta-Resume.pdf" download>
              Download resume <span>↓</span>
            </a>
            <a className="recruiter-secondary" href="/Komali-Katta-Resume.pdf" target="_blank" rel="noreferrer">
              View resume <span>↗</span>
            </a>
            <a className="recruiter-secondary" href="https://github.com/katta-komali" target="_blank" rel="noreferrer">
              GitHub profile <span>↗</span>
            </a>
          </div>
        </div>

        <div className="recruiter-facts" aria-label="Profile facts">
          {facts.map(([label, value], index) => (
            <div className={`recruiter-fact reveal reveal-delay-${index}`} key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecruiterToolkit;
