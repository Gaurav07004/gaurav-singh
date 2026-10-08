import { IoMailOutline } from "react-icons/io5";
import { email } from "../../data/socialLinks";

// "Get in touch" block at the bottom of the menu drawer.
export default function Footer() {
  return (
    <footer className="mt-auto pt-10">
      <p className="uppercase text-sm tracking-widest text-(--secondary-light)">
        Get in touch
      </p>

      <a
        href={`mailto:${email}`}
        className="mt-3 flex items-center gap-3 group transition xl:text-base text-[1 rem]"
      >
        <IoMailOutline className="group-hover:text-(--primary) transition" />
        <span className="group-hover:text-(--primary) transition">{email}</span>
      </a>
    </footer>
  );
}
