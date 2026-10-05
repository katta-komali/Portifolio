import "../styles/what-i-bring.css";

const strengths = [
  {
    number: "01",
    title: "Clean interfaces",
    text: "I care about clear layouts, responsive behavior, reusable components, and interfaces that are easy to understand.",
  },
  {
    number: "02",
    title: "Practical solutions",
    text: "I approach requirements by breaking them into focused features and building solutions that are useful in real workflows.",
  },
  {
    number: "03",
    title: "Full-stack mindset",
    text: "My project work spans frontend development, backend APIs, databases, authentication, and application integration.",
  },
];

function WhatIBring() {
  return (
    <section className="bring-section" id="approach">
      <div className="bring-heading reveal">
        <p>MY APPROACH</p>
        <h2>What I bring to a <span>project</span></h2>
      </div>

      <div className="bring-grid">
        {strengths.map((item, index) => (
          <article className={`bring-card reveal reveal-delay-${index}`} key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhatIBring;
