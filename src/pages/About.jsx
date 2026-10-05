import "../styles/about.css";
function About() {
  return (
    <section className="about section" id="about">
      <div className="about-container">
        <div className="about-content">

          <p className="eyebrow">
            ABOUT ME
          </p>

          <h2 className="about-title">
            Curious about code,
            <span> serious about growth.</span>
          </h2>

          <p className="about-text">
            I&apos;m Katta Komali, a Software Developer with a B.Tech in
            Electrical and Electronics Engineering. My career objective is to
            build my knowledge through challenging opportunities and use my
            skills toward the growth of an organization.
          </p>

          <p className="about-text">
            I have practical knowledge of Python, Flask, HTML, CSS, MySQL,
            programming fundamentals, functions, OOPS, data types, and
            variables. I enjoy learning, working productively, and completing
            responsibilities on time.
          </p>

          <div className="about-details">

            <div className="about-detail">
              <span>Role</span>
              <strong>Software Developer</strong>
            </div>

            <div className="about-detail">
              <span>Location</span>
              <strong>Hyderabad, India</strong>
            </div>

            <div className="about-detail">
              <span>Education</span>
              <strong>B.Tech (EEE)</strong>
            </div>

            <div className="about-detail">
              <span>Technical Focus</span>
              <strong>Python · Flask · HTML · CSS · MySQL</strong>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;