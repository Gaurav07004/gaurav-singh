import { SlLocationPin } from "react-icons/sl";
import { SECTIONS } from "../../../data/sections";
import { professionalExperience } from "../../../data/experience";
import { getCompanyPeriod, groupByCompany } from "../../../utils/experience";
import SectionTitle from "../../common/SectionTitle";
import Card from "../../common/Card";
import TagList from "../../common/TagList";
import "./Experience.css";

const groupedExperience = groupByCompany(professionalExperience);

export default function Experience() {
  const { id, label, title } = SECTIONS.experience;

  return (
    <section id={id} className="experience-section font-[Quicksand]">
      <SectionTitle label={label} title={title} />

      <div className="experience-list">
        {groupedExperience.map((group) => (
          <Card key={group.company} hover className="experience-card">
            <header className="experience-header">
              <div className="experience-company-info">
                <h2 className="experience-company">{group.company}</h2>

                <div className="experience-meta">
                  <span className="experience-location">
                    <SlLocationPin />
                    {group.location}
                  </span>
                  <span className="experience-work-mode">
                    ({group.workMode})
                  </span>
                </div>
              </div>

              <span className="experience-duration">
                {getCompanyPeriod(group.roles)}
              </span>
            </header>

            <div className="experience-roles">
              {group.roles.map((role) => (
                <article key={role.position} className="experience-role">
                  <div className="experience-role-head">
                    <h3>{role.position}</h3>

                    <span className="experience-role-period">
                      {role.employmentPeriod}
                    </span>
                  </div>

                  <p className="experience-summary">{role.description}</p>

                  <TagList items={role.technologies} size="md" />
                </article>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
