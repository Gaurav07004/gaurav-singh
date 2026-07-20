import { IoFlowerOutline } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import { aboutParagraphs, coreProfile } from "../data/Content/Content-1";

export default function AboutSection() {
  return (
    <section id="About-Me" className="about-section font-[Quicksand]">
      <header className="about-header">
        <div className="about-kicker">
          <IoFlowerOutline className="text-xl text-(--primary) slow-spin" />
          <span>About Me</span>
        </div>

        <div className="about-heading-grid">
          <h2>Software developer building SaaS products.</h2>
          <p>
            I build production-ready enterprise applications using Java, Spring
            Boot, and React.js with expertise in RESTful APIs, authentication,
            HRMS, attendance, payroll, approval workflows, and dashboard
            development.
          </p>
        </div>
      </header>

      <div className="about-layout">
        <article className="about-story">
          <div className="about-story-label">
            <span>Profile</span>
            <HiArrowUpRight />
          </div>

          <div className="about-paragraphs">
            {aboutParagraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </article>

        <aside className="about-profile-grid" aria-label="Core profile">
          {coreProfile.map((item) => (
            <div key={item.title} className="about-profile-card">
              <p>{item.title}</p>
              <h3>{item.value}</h3>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
