import { IoFlowerOutline } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

export default function ContactSection() {
  return (
    <section id="Contact" className="contact-section font-[Quicksand]">
      <header className="contact-header">
        <div className="contact-kicker">
          <IoFlowerOutline className="text-xl text-(--primary) slow-spin" />
          <span>Get In Touch</span>
        </div>

        <div className="contact-heading-grid">
          <h2>Let's build something meaningful together.</h2>
        </div>
      </header>

      <section className="contact-card">
        <div className="contact-content">
          <p className="contact-label">AVAILABLE FOR OPPORTUNITIES</p>

          <h3>Full Stack Developer</h3>

          <p className="contact-description">
            I'm currently open to Full Stack Developer opportunities where I can
            contribute to scalable web applications, enterprise SaaS platforms,
            and modern full-stack solutions. Whether you're hiring, looking for
            a collaborator, or have an exciting project in mind, I'd be happy to
            connect and discuss how I can add value to your team. I look forward
            to hearing from you.
          </p>

          <div className="contact-actions">
            <NavLink
              to="mailto:singhgaurav07004@gmail.com"
              className="contact-button"
            >
              Send Email
              <HiArrowUpRight className="text-base" />
            </NavLink>

            <NavLink
              to="https://www.linkedin.com/in/gaurav-singh-668584237"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button secondary"
            >
              LinkedIn
            </NavLink>
          </div>
        </div>
      </section>
    </section>
  );
}
