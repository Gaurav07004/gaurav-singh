import { IoFlowerOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        font-[Quicksand]
        max-w-337.5 mx-auto
        
        px-6 pt-10 pb-10
        sm:px-8 sm:pt-20
        md:px-10 md:pt-20
        lg:px-12 lg:pt-20
        xl:px-6
      "
    >
      <h2 className="flex items-center gap-4">
        <IoFlowerOutline className="text-2xl font-bold text-(--primary) uppercase slow-spin" />
        <span className="text-2xl font-bold text-(--primary) uppercase">
          Get In Touch
        </span>
      </h2>

      <p
        className="
          mt-4
          text-[15px]
          leading-relaxed
          text-(--secondary-light)
          text-justify

          sm:text-base
          md:text-[17px]
        "
      >
        I’m open to opportunities in frontend, backend, and full-stack
        development, where I can contribute to building scalable applications
        and meaningful product experiences. If you’d like to collaborate or
        discuss an opportunity, I’d be happy to connect.
      </p>

      <NavLink
        to="mailto:singhgaurav07004@gmail.com"
        className="
          mt-6
          inline-block
          px-5 py-3
          rounded
          text-[0.8rem] uppercase tracking-wide
          border border-(--primary)
          text-(--primary)
          transition-all duration-500
          hover:font-bold
          hover:bg-(--primary-light)
          hover:text-black
          hover:border-(--primary-light)
        "
      >
        Drop a Mail!
      </NavLink>
    </section>
  );
}
