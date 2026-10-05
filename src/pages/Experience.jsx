import "./experience.css";

const timeline = [
  {
    date: "2022 – 2025",
    title: "B.Tech (Electrical & Electronics Engineering)",
    subtitle: "JNTUK · Kallam Haranadhareddy Institute of Technology",
    description: "Completed B.Tech with a 7.8 CGPA, building an engineering foundation alongside programming and software development skills.",
    skills: "Engineering · Programming Fundamentals",
  },
  {
    date: "2019 – 2022",
    title: "Diploma (Electrical & Electronics Engineering)",
    subtitle: "SBTET · Bapatla Engineering College",
    description: "Completed Diploma with a 7.27 CGPA and developed a foundation in electrical and electronics engineering.",
    skills: "Electrical Engineering · Electronics",
  },
  {
    date: "2018 – 2019",
    title: "10th Class",
    subtitle: "Navabharatha High School, Narasaraopet",
    description: "Completed secondary school education with a 9.7 GPA.",
    skills: "Secondary Education",
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="experience-heading reveal">
          <p>MY JOURNEY</p>
          <h2>Education & <span>Background</span></h2>
          <p>Education and academic background taken directly from my current resume.</p>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div className={`timeline-item reveal reveal-delay-${index}`} key={item.date}>
              <div className="timeline-dot" />
              <article className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
                <div className="timeline-skills">{item.skills}</div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
