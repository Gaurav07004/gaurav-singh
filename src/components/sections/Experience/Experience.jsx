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
            <div className="experience-top">
              <span className="experience-duration">
                {getCompanyPeriod(group.roles)}
              </span>
            </div>

            <div className="experience-content">
              <div className="experience-company">
                <span>{group.company}</span>

                <div className="experience-location">
                  <span className="text-base text-(--primary)">
                    {group.workMode} • {group.location}
                  </span>
                </div>
              </div>

              {group.roles.map((role) => (
                <div key={role.position} className="experience-role">
                  <div className="experience-role-head">
                    <h3>{role.position}</h3>
                    <span className="experience-role-period">
                      {role.employmentPeriod}
                    </span>
                  </div>

                  <p className="experience-summary">{role.description}</p>

                  <TagList items={role.technologies} size="md" />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
