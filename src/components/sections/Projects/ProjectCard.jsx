import Card from "../../common/Card";
import Button from "../../common/Button";
import TagList from "../../common/TagList";

export default function ProjectCard({ project }) {
  return (
    <Card hover className="project-card">
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
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        <TagList items={project.techAndTechnique} size="sm" />

        <Button
          href={`/projects/${project.id}`}
          size="sm"
          className="project-button"
        >
          View Details
        </Button>
      </div>
    </Card>
  );
}
