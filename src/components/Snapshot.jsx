import "../styles/snapshot.css";

const cards = [
  ["01", "Web Technologies", "Working with HTML and CSS to create clear, user-friendly web pages."],
  ["02", "Python Programming", "Applying Python with programming fundamentals including functions, OOPS, data types, variables, and operators."],
  ["03", "Flask & MySQL", "Using Flask for application development and MySQL for database work."],
  ["04", "Engineering Project", "Exploring EV battery management through a project focused on performance, safety, and efficiency."],
];

function Snapshot() {
  return (
    <section className="snapshot" id="snapshot">
      <div className="snapshot-heading reveal">
        <p>PROFESSIONAL SNAPSHOT</p>
        <h2>A little about what I do</h2>
      </div>

      <div className="snapshot-cards">
        {cards.map(([number, title, description], index) => (
          <article className={`snapshot-card reveal reveal-delay-${Math.min(index, 3)}`} key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Snapshot;
