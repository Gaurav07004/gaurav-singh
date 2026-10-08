import { FaCode } from "react-icons/fa6";
import { SECTIONS } from "../../../data/sections";
import { currentFocus, technicalSkills } from "../../../data/skills";
import SectionTitle from "../../common/SectionTitle";
import Card from "../../common/Card";
import TagList from "../../common/TagList";
import "./TechStack.css";

export default function TechStack() {
  const { id, label, title, description, focusLabel, focusTitle } =
    SECTIONS.techStack;

  return (
    <section id={id} className="tech-section">
      <SectionTitle
        label={label}
        title={title}
        //description={description}
      />

      <section className="tech-focus">
        <div>
          <p className="tech-section-label">{focusLabel}</p>
          <h3>{focusTitle}</h3>
        </div>

        <TagList
          items={currentFocus}
          size="lg"
          accent
          className="tech-focus-list"
        />
      </section>

      <section className="tech-grid">
        {technicalSkills.map((group) => (
          <Card key={group.category} hover className="tech-card">
            <div className="tech-card-header">
              <div className="tech-card-icon">
                <FaCode />
              </div>

              <h3>{group.category}</h3>
            </div>

            <TagList
              items={group.technologies}
              size="lg"
              className="tech-skill-list"
            />
          </Card>
        ))}
      </section>
    </section>
  );
}
