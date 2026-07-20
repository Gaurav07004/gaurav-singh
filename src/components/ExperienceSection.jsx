import { IoFlowerOutline, IoLocationOutline } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import { experience } from "../data/Content/Content-1";

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
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="experience-card"
          >
            <div className="experience-top">
              <span className="experience-duration">{job.duration}</span>

              {/* <HiArrowUpRight className="experience-arrow" aria-hidden="true" /> */}
            </div>

            <div className="experience-content">
              <h3>{job.role}</h3>

              <div className="experience-company">
                <span>{job.company}</span>

                <div className="experience-location">
                  {/* <span className="experience-duration">
                    <IoLocationOutline className="text-sm text-(--primary) mr-2" />
                    {job.locationType} • {job.location}
                  </span> */}
                  <span className="text-base text-(--primary)">
                    {job.locationType} • {job.location}
                  </span>
                </div>
              </div>

              <p className="experience-summary">{job.summary}</p>

              <div className="experience-tech">
                {job.tech.map((tech) => (
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
