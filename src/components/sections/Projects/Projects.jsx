import { SECTIONS } from "../../../data/sections";
import projects from "../../../data/projects";
import SectionTitle from "../../common/SectionTitle";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  const { id, label, title, description } = SECTIONS.projects;

  return (
    <section id={id} className="projects-section font-[Quicksand]">
      <SectionTitle
        label={label}
        title={title}
        // description={description}
      />

      <section className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
}
