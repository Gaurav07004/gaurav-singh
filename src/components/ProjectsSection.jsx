import { IoFlowerOutline } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import projects from "../data/Project/Project";

export default function Projects() {
  return (
    <section id="Projects" className="projects-section font-[Quicksand]">
      <header className="projects-header">
        <div className="projects-kicker">
          <IoFlowerOutline className="text-xl text-(--primary) slow-spin" />
          <span>Projects</span>
        </div>

        <div className="projects-heading-grid">
          <h2>Production-ready applications built for real users.</h2>

          <p>
            A collection of full-stack applications focused on scalable React
            interfaces, secure backend systems, modern UI design, enterprise
            workflows, and real-world problem solving.
          </p>
        </div>
      </header>

      <section className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-content">
              <div className="project-card-top">
                <div className="project-title">
                  <div>
                    <p className="project-type">{project.type}</p>

                    <h3>{project.name}</h3>
                  </div>
                </div>

                <div className="project-year">
                  <span>{project.year}</span>

                  <HiArrowUpRight
                    className="project-arrow"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.techAndTechnique.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <Link to={`/projects/${project.id}`} className="project-button">
                View Details
              </Link>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
