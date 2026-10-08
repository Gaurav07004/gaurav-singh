import { IoFlowerOutline } from "react-icons/io5";
import { professionalExperience } from "../data/Content/Content-1";

const splitPeriod = (period) => period.split(/\s[–-]\s/);

// Group roles that share a company into a single entry.
// Roles stay in the same order as the data file (latest first).
const groupedExperience = Object.values(
  professionalExperience.reduce((groups, job) => {
    if (!groups[job.company]) {
      groups[job.company] = {
        company: job.company,
        location: job.location,
        workMode: job.workMode,
        roles: [],
      };
    }
    groups[job.company].roles.push(job);
    return groups;
  }, {}),
);

// Overall duration at the company: earliest start to latest end.
const getCompanyPeriod = (roles) => {
  const start = splitPeriod(roles[roles.length - 1].employmentPeriod)[0];
  const end = splitPeriod(roles[0].employmentPeriod)[1];
  return `${start} – ${end}`;
};

export default function WorkExperience() {
  return (
    <section
      id="Work-Experience"
      className="experience-section font-[Quicksand]"
    >
      <header className="experience-header">
        <div className="experience-kicker">
          <IoFlowerOutline className="text-xl text-(--primary) slow-spin" />
          <span>Experience</span>
        </div>

        <div className="experience-heading-grid">
          <h2>Product engineering experience in real SaaS workflows.</h2>
        </div>
      </header>

      <div className="experience-list">
        {groupedExperience.map((group) => (
          <article key={group.company} className="experience-card">
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

                  <div className="experience-tech">
                    {role.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
