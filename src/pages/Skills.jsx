import "./Skills.css";

const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "OOPS", "Functions", "Data Types", "Variables", "Operators"],
  },
  {
    title: "Web Technologies",
    items: ["HTML", "CSS"],
  },
  {
    title: "Framework & Database",
    items: ["Flask", "MySQL"],
  },
];

const skills = [
  ["Python", "80%"],
  ["Flask", "75%"],
  ["HTML", "80%"],
  ["CSS", "75%"],
  ["MySQL", "70%"],
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-heading reveal">
          <p>MY SKILLS</p>
          <h2>Skills & <span>Technologies</span></h2>
          <p className="skills-description">
            Technical skills and programming fundamentals listed in my resume,
            developed through academic work, projects, and continuous learning.
          </p>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group, index) => (
            <article className={`skill-group reveal reveal-delay-${index}`} key={group.title}>
              <span className="skill-group-number">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-list">
          {skills.map(([name, level], index) => (
            <div className={`skill-item reveal reveal-delay-${index % 3}`} key={name}>
              <div className="skill-info">
                <span>{name}</span>
                <span>{level}</span>
              </div>
              <div className="skill-bar" aria-label={`${name} ${level}`}>
                <div className="skill-progress" style={{ width: level }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
