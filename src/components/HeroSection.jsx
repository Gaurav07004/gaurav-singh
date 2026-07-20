import ArrowAnimation from "./ArrowAnimation";
import { NavLink } from "react-router-dom";
import { stats, about } from "../data/Content/Content-1";
import Resume from "../data/Resume/Gaurav_Singh_1.pdf";
import ScrollToTop from "./ScrollToTop";
import { HiArrowUpRight } from "react-icons/hi2";
import { SlLocationPin } from "react-icons/sl";

const heroHighlights = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redux Toolkit",
];

export default function HeroSection() {
  return (
    <main id="Home" className="hero-section">
      {about.map((profile) => (
        <section key={profile.name} className="hero-copy">
          <div className="hero-eyebrow">
            <span>Full Stack Developer</span>

            <span className="hero-eyebrow-divider" />

            <span className="hero-location">
              <SlLocationPin className="mb-[1px] text-sm" />
              Mumbai, India
            </span>
          </div>

          <h1 className="hero-title">
            I'm
            <span>{profile.name}</span>
          </h1>

          <p className="hero-description">{profile.about}</p>

          <div className="hero-actions">
            <NavLink
              to="mailto:singhgaurav07004@gmail.com"
              className="hero-button"
            >
              Get In Touch
              <HiArrowUpRight />
            </NavLink>

            <NavLink
              to={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button secondary"
            >
              View Resume
            </NavLink>
          </div>
        </section>
      ))}

      <aside className="hero-stats">
        {stats.map((item) => (
          <article key={item.label} className="hero-stat-card">
            <h3 className="hero-stat-value">
              {item.value}
              <span>+</span>
            </h3>

            <p className="hero-stat-label">{item.label}</p>
          </article>
        ))}
      </aside>

      <ArrowAnimation />
      <ScrollToTop />
    </main>
  );
}
