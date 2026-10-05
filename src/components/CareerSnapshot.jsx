import "./CareerSnapshot.css";

const points = [
  ["Degree", "B.Tech (EEE) · 7.8 CGPA"],
  ["Programming", "Python · OOPS · Functions"],
  ["Web", "HTML · CSS · Flask"],
  ["Database", "MySQL"],
];

function CareerSnapshot() {
  return (
    <section className="career-snapshot reveal" aria-labelledby="career-snapshot-title">
      <div className="career-snapshot-inner">
        <div>
          <p className="career-snapshot-eyebrow">CAREER SNAPSHOT</p>
          <h2 id="career-snapshot-title">A motivated developer with a <span>practical learning mindset.</span></h2>
          <p className="career-snapshot-copy">
            My background combines an EEE engineering degree with hands-on learning in
            Python, Flask, HTML, CSS, MySQL, and software development fundamentals.
          </p>
        </div>
        <div className="career-snapshot-grid">
          {points.map(([label, value]) => (
            <div className="career-snapshot-item" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerSnapshot;
