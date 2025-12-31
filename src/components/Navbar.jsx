import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { PiLinkedinLogoLight, PiGithubLogoLight } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import resume from "../data/Resume/Gaurav_Singh_Developer.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const socialLinks = [
    {
      label: "Github",
      url: "https://github.com/Gaurav07004",
      icon: <PiGithubLogoLight />,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/gaurav-singh-668584237/",
      icon: <PiLinkedinLogoLight />,
    },
  ];

  const navLinks = [
    { label: "Home", href: "#hero", color: "bg-cyan-400" },
    { label: "About Me", href: "#about", color: "bg-blue-400" },
    { label: "Experience", href: "#experience", color: "bg-emerald-400" },
    { label: "Projects", href: "#projects", color: "bg-indigo-400" },
  ];

  return (
    <>
      <nav className="fixed w-full py-6 px-10 flex justify-end bg-(--bg-dark) z-40">
        <div className="flex items-center gap-12">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="
              border border-(--primary)
              text-(--primary)
              uppercase px-5 py-3 rounded text-sm
              hover:bg-(--primary-light)
              hover:border-(--primary-light)
              hover:text-black
              transition
            "
          >
            View Resume
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="text-(--primary)"
          >
            <HiOutlineMenuAlt1 className="text-3xl rotate-180 cursor-pointer" />
          </button>
        </div>
      </nav>

      <div
        onClick={closeMenu}
        className={`
          fixed inset-0 z-50
          bg-black/50 backdrop-blur-sm
          transition-opacity duration-500
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      <aside
        role="dialog"
        aria-modal="true"
        className={`
          fixed top-0 right-0 h-full z-50
          w-[35vw] min-w-105 max-w-170
          bg-(--bg-dark)
          border-l border-white/10
          transition-transform duration-500 ease-[cubic-bezier(.25,.8,.25,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          className="absolute right-10 top-8 text-(--secondary) text-3xl"
        >
          <RxCross1 />
        </button>

        <div className="mt-44 px-16 flex flex-col h-full text-(--secondary)">
          <div className="grid grid-cols-2 gap-16">
            <section>
              <p className="uppercase text-sm tracking-widest text-(--secondary-light)">
                Menu
              </p>

              <ul className="mt-6 text-lg font-medium space-y-4 uppercase">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center gap-3 group transition"
                    >
                      <span
                        className={`
                          relative w-3 h-3 rounded-full ${link.color}
                          transition-all duration-300
                          group-hover:scale-200
                        `}
                      >
                        <span
                          className="
                            absolute inset-0 grid place-items-center
                            text-black text-[9px]
                            opacity-0 translate-x-0.5
                            group-hover:opacity-100
                            group-hover:translate-x-0
                            transition-all duration-300
                          "
                        >
                          <HiArrowUpRight />
                        </span>
                      </span>

                      <span className="group-hover:translate-x-1 hover:text-(--primary) transition">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <p className="uppercase text-sm tracking-widest text-(--secondary-light)">
                Social
              </p>

              <ul className="mt-6 text-lg space-y-3 uppercase">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group transition"
                    >
                      <span className="text-xl group-hover:text-(--primary) transition">
                        {link.icon}
                      </span>

                      <span className="group-hover:text-(--primary) transition">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <footer className="mt-60">
            <p className="uppercase text-sm tracking-widest text-(--secondary-light)">
              Get in touch
            </p>

            <a
              href="mailto:singhguarav07004@gmail.com"
              className="mt-3 flex items-center gap-3 group transition"
            >
              <IoMailOutline className="text-xl group-hover:text-(--primary) transition" />
              <span className="group-hover:text-(--primary) transition">
                singhguarav07004@gmail.com
              </span>
            </a>
          </footer>
        </div>
      </aside>
    </>
  );
}
