import { SECTIONS } from "../../../data/sections";
import { email, linkedInUrl } from "../../../data/socialLinks";
import SectionTitle from "../../common/SectionTitle";
import Card from "../../common/Card";
import Button, { ButtonGroup } from "../../common/Button";
import "./Contact.css";

export default function Contact() {
  const { id, label, title, availability, role, description } =
    SECTIONS.contact;

  return (
    <section id={id} className="contact-section font-[Quicksand]">
      <SectionTitle label={label} title={title} />

      <Card as="section" hover className="contact-card">
        <div className="contact-content">
          <p className="contact-label">{availability}</p>

          <h3>{role}</h3>

          <p className="contact-description">{description}</p>

          <ButtonGroup className="contact-actions">
            <Button href={`mailto:${email}`} size="md" arrow>
              Send Email
            </Button>

            <Button href={linkedInUrl} size="md" variant="secondary" newTab>
              LinkedIn
            </Button>
          </ButtonGroup>
        </div>
      </Card>
    </section>
  );
}
