import "./Services.css";

const services = [
  { number: "01", title: "Web Development", text: "Building clear web pages with HTML and CSS and a practical focus on usability." },
  { number: "02", title: "Python & Flask", text: "Developing practical applications with Python, Flask, functions, OOPS, data types, and variables." },
  { number: "03", title: "Database Development", text: "Working with MySQL and structured application data for practical software projects." },
  { number: "04", title: "Problem Solving", text: "Applying programming fundamentals and a positive, self-motivated approach to complete work productively." },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-heading reveal">
          <p className="section-kicker">WHAT I CAN BUILD</p>
          <h2>Useful software, <span>built clearly.</span></h2>
          <p>Areas that match the technologies and project work represented in this portfolio.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className={`service-card reveal reveal-delay-${index}`} key={service.number}>
              <span className="service-number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
