import { useEffect, useState } from "react";
import "./projects.css";

const projects = [
  {
    number: "01",
    title: "Employee HRMS Portal",
    description:
      "A web-based employee portal designed to bring everyday HR activities into one clear, easy-to-use workspace for employees and teams.",
    technologies: "React · JavaScript · Supabase · CSS",
    category: "Web Development",
    featured: true,
    highlights: [
      "Employee dashboard for a focused workplace experience",
      "Attendance and leave-management workflows",
      "Employee support and HR-related information in one portal",
    ],
  },
  {
    number: "02",
    title: "Personal Portfolio Website",
    description:
      "A responsive professional portfolio built to present my skills, education, projects, resume, and contact information to recruiters and visitors.",
    technologies: "React · JavaScript · CSS · Vite",
    category: "Web Development",
    featured: false,
    highlights: [
      "Responsive portfolio experience for desktop and mobile",
      "Project details, resume access, skills, education, and contact sections",
      "Dark mode, accessibility, SEO, and production-ready deployment configuration",
    ],
  },
  {
    number: "03",
    title: "Electric Vehicles — Advanced Battery Management System",
    description:
      "An academic project focused on improving the performance and lifespan of EV batteries through an advanced battery management system integrating solar energy and grid power.",
    technologies: "Battery Management · Solar Energy · Grid Power · Predictive Maintenance",
    category: "Engineering",
    featured: false,
    highlights: [
      "Adaptive power distribution using solar and grid power",
      "Addresses DC faults, voltage instability, and thermal stress",
      "Predictive maintenance and thermal management for safety and efficiency",
    ],
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading reveal">
          <p className="projects-small-title">MY WORK</p>
          <h2>My <span>Work</span></h2>
          <p>
            Selected work that represents my web development, portfolio, and engineering experience.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${project.featured ? "project-card-featured" : ""} reveal reveal-delay-${index}`}
              key={project.number}
            >
              <div className="project-topline">
                <span className="project-number">{project.number}</span>
                {project.featured && <span className="project-badge">FEATURED</span>}
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">{project.technologies}</div>
              <div className="project-actions">
                <button className="project-button" type="button" onClick={() => setSelectedProject(project)}>
                  View details <span>↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedProject(null);
        }}>
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button className="project-modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close project details">
              ×
            </button>
            <span className="project-modal-label">PROJECT {selectedProject.number}</span>
            <h3 id="project-modal-title">{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <h4>Highlights</h4>
            <ul>
              {selectedProject.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <div className="project-modal-stack">{selectedProject.technologies}</div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
