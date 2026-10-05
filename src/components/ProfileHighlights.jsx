import "./ProfileHighlights.css";

const highlights = [
  {
    label: "BUILD",
    title: "Practical interfaces",
    text: "Practical web pages built with HTML and CSS, with a focus on clarity and usability.",
  },
  {
    label: "BACKEND",
    title: "Programming fundamentals",
    text: "Comfortable working with Python, Flask, MySQL, and core programming concepts.",
  },
  {
    label: "COLLABORATE",
    title: "Clear communication",
    text: "Focused on understandable code, useful documentation, and steady iteration from idea to delivery.",
  },
];

function ProfileHighlights() {
  return (
    <section className="highlights-section" aria-labelledby="highlights-title">
      <div className="highlights-container">
        <div className="highlights-heading reveal">
          <p className="section-kicker">QUICK REVIEW</p>
          <h2 id="highlights-title">A profile built around <span>useful work.</span></h2>
          <p>
            A concise view of the strengths I bring to development work, without the need to scan the whole portfolio first.
          </p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <article className={`highlight-card reveal reveal-delay-${index}`} key={item.label}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfileHighlights;
