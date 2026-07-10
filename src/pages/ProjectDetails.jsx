import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import { RiArrowRightSLine } from "react-icons/ri";

import projects from "../data/Project/Project";

export default function ProjectDetails() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="project-detail">
        <h2>Project not found.</h2>
      </section>
    );
  }

  return (
    <section className="project-detail">
      <Link to="/" className="project-back">
        <HiOutlineArrowLeft />
        <span>Back to Portfolio</span>
      </Link>

      <header className="project-detail-header">
        <div className="project-detail-top">
          <div>
            <p className="project-detail-type">{project.type}</p>

            <h1 className="project-detail-title">{project.name}</h1>
          </div>

          <span className="project-detail-year">{project.year}</span>
        </div>

        <p className="project-detail-description">{project.description}</p>
      </header>

      <div className="project-detail-image-wrapper">
        <img
          src={project.image}
          alt={project.name}
          className="project-detail-image"
        />
      </div>

      <section className="project-detail-section">
        <h2 className="project-detail-heading">Technologies Used</h2>

        <div className="project-detail-tech">
          {project.techAndTechnique.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className="project-detail-section">
        <h2 className="project-detail-heading">Key Features</h2>

        <ul className="project-detail-list">
          {project.keyFeatures.map((feature) => (
            <li key={feature} className="project-detail-item">
              <RiArrowRightSLine />

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="project-detail-section">
        <h2 className="project-detail-heading">Technical Highlights</h2>

        <ul className="project-detail-list">
          {project.technicalHighlights.map((item) => (
            <li key={item} className="project-detail-item">
              <RiArrowRightSLine />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="project-detail-actions">
        <Link
          to={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="project-detail-button"
        >
          Live Demo
          <HiArrowUpRight />
        </Link>

        <Link
          to={project.gitHub}
          target="_blank"
          rel="noopener noreferrer"
          className="project-detail-button secondary"
        >
          Source Code
        </Link>
      </section>
    </section>
  );
}
