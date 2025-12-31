import { IoFlowerOutline } from "react-icons/io5";
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        font-[Quicksand]
        max-w-337.5 mx-auto
        px-12 pt-30 pb-10
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
            mt-6 px-5 py-3
            rounded
            text-sm uppercase tracking-wide
            border border-(--primary)
            text-(--primary)
            transition-all duration-300
            hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)]
            hover:bg-(--primary-light)
            hover:text-black
            hover:border-(--primary-light)
        "
      >
        Drop a Mail!
      </a>
    </section>
  );
}
