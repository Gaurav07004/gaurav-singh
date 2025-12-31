import { IoFlowerOutline } from "react-icons/io5";
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        font-[Quicksand]
        max-w-337.5 mx-auto
        px-12 py-15
      "
    >
      <h2 className="flex items-center gap-4">
        <IoFlowerOutline className="text-2xl font-bold text-(--primary) uppercase slow-spin" />{" "}
        <span className="text-2xl font-bold text-(--primary) uppercase">
          Get In Touch
        </span>
      </h2>

      <p className="mt-4 text-lg leading-relaxed text-(--secondary-light) text-justify">
        I’m open to opportunities in frontend, backend, and full-stack
        development, where I can contribute to building scalable applications
        and meaningful product experiences. If you’d like to collaborate or
        discuss an opportunity, I’d be happy to connect.
      </p>

      <a
        href="mailto:singhgaurav07004@gmail.com"
        className="
          inline-block
          mt-6 px-8 py-4
          rounded
          text-sm uppercase tracking-wide
          border border-(--primary)
          text-(--primary)
          hover:bg-(--primary-light)
          hover:text-black
          hover:border-(--primary-light)
          transition
        "
      >
        Drop a Mail!
      </a>
    </section>
  );
}
