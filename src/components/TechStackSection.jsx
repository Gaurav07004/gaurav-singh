import { IoFlowerOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { currentFocus, technicalSkills } from "../data/Content/Content-1";

export default function TechStackSection() {
  return (
    <section id="Tech-Stack" className="tech-section">
      <header className="tech-header">
        <div className="tech-kicker">
          <IoFlowerOutline className="text-xl text-(--primary) slow-spin" />
          <span>Tech Stack</span>
        </div>

        <div className="tech-heading-grid">
          <h2>Practical tools for building scalable full-stack products.</h2>

          <p>
            A focused technology stack centered around React.js interfaces,
            Node.js and Express.js APIs, MongoDB databases, secure
            authentication, RESTful services, and modern software development
            practices.
          </p>
        </div>
      </header>

      <section className="tech-focus">
        <div>
          <p className="tech-section-label">Currently Strengthening</p>

          <h3>
            Expanding the technologies I use for scalable product development.
          </h3>
        </div>

        <div className="tech-focus-list">
          {currentFocus.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="tech-grid">
        {technicalSkills.map((group) => (
          <article key={group.category} className="tech-card">
            <div className="tech-card-header">
              <div className="tech-card-icon">
                <FaCode />
              </div>

              <h3>{group.category}</h3>
            </div>

            <div className="tech-skill-list">
              {group.technologies.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
