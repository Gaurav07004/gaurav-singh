import { HiArrowUpRight } from "react-icons/hi2";
import { SECTIONS } from "../../../data/sections";
import { aboutParagraphs, coreProfile } from "../../../data/profile";
import SectionTitle from "../../common/SectionTitle";
import Card from "../../common/Card";
import "./About.css";

export default function About() {
  const { id, label, title, description } = SECTIONS.about;

  return (
    <section id={id} className="about-section font-[Quicksand]">
      <SectionTitle
        label={label}
        title={title}
        // description={description}
        // wide
      />

      <div className="about-layout">
        <Card className="about-story">
          <div className="about-story-label">
            <span>Profile</span>
            <HiArrowUpRight />
          </div>

          <div className="about-paragraphs">
            {aboutParagraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </Card>

        <aside className="about-profile-grid" aria-label="Core profile">
          {coreProfile.map((item) => (
            <Card
              key={item.title}
              hover
              as="div"
              className="about-profile-card"
            >
              <p>{item.title}</p>
              <h3>{item.value}</h3>
            </Card>
          ))}
        </aside>
      </div>
    </section>
  );
}
