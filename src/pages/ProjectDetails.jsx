import { Link, useParams } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import projects from "../data/projects";
import useScrollToTopOnMount from "../hooks/useScrollToTopOnMount";
import Button, { ButtonGroup } from "../components/common/Button";
import TagList from "../components/common/TagList";
import "./ProjectDetails.css";

// Heading + children, repeated for every block of the page.
function DetailSection({ title, children }) {
  return (
    <section className="project-detail-section">
      <h2 className="project-detail-heading">{title}</h2>
      {children}
    </section>
  );
}

function DetailList({ items }) {
  return (
    <ul className="project-detail-list">
      {items.map((item) => (
        <li key={item} className="project-detail-item">
          <RiArrowRightSLine />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetails() {
  useScrollToTopOnMount();

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

      <DetailSection title="Technologies Used">
        <TagList
          items={project.techAndTechnique}
          size="lg"
          className="project-detail-tech"
        />
      </DetailSection>

      <DetailSection title="Key Features">
        <DetailList items={project.keyFeatures} />
      </DetailSection>

      <DetailSection title="Technical Highlights">
        <DetailList items={project.technicalHighlights} />
      </DetailSection>

      <ButtonGroup className="project-detail-actions">
        <Button href={project.demo} arrow newTab>
          Live Demo
        </Button>

        <Button href={project.gitHub} variant="secondary" newTab>
          Source Code
        </Button>
      </ButtonGroup>
    </section>
  );
}
