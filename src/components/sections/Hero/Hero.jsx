import { SlLocationPin } from "react-icons/sl";
import { SECTIONS } from "../../../data/sections";
import { email } from "../../../data/socialLinks";
import { heroProfile, heroStatistics, resumeUrl } from "../../../data/profile";
import Button, { ButtonGroup } from "../../common/Button";
import ArrowAnimation from "./ArrowAnimation";
import "./Hero.css";

export default function Hero() {
  return (
    <main id={SECTIONS.home.id} className="hero-section">
      {heroProfile.map((profile) => (
        <section key={profile.name} className="hero-copy">
          <div className="hero-eyebrow">
            <span>Software Developer</span>

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

          <ButtonGroup className="hero-actions">
            <Button href={`mailto:${email}`} arrow>
              Get In Touch
            </Button>

            <Button href={resumeUrl} variant="secondary" newTab>
              View Resume
            </Button>
          </ButtonGroup>
        </section>
      ))}

      <aside className="hero-stats">
        {heroStatistics.map((item) => (
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
    </main>
  );
}
