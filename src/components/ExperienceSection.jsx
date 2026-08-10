import { IoFlowerOutline, IoLocationOutline } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import { professionalExperience } from "../data/Content/Content-1";

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
        {professionalExperience.map((job) => (
          <article
            key={`${job.company}-${job.position}`}
            className="experience-card"
          >
            <div className="experience-top">
              <span className="experience-duration">
                {job.employmentPeriod}
              </span>
            </div>

            <div className="experience-content">
              <h3>{job.position}</h3>

              <div className="experience-company">
                <span>{job.company}</span>

                <div className="experience-location">
                  <span className="text-base text-(--primary)">
                    {job.workMode} • {job.location}
                  </span>
                </div>
              </div>

              <p className="experience-summary">{job.description}</p>

              <div className="experience-tech">
                {job.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
