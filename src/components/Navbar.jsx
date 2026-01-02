import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TbMenu3 } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { PiLinkedinLogoLight, PiGithubLogoLight } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import resume from "../data/Resume/Gaurav-Singh.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [rotating, setRotating] = useState(false);

  const handleOpenMenu = () => {
    setRotating(true);
    setTimeout(() => {
      setOpen(true);
      setRotating(false);
    }, 250);
  };

  const closeMenu = (delay = 400) => {
    setTimeout(() => setOpen(false), delay);
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

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
    { id: "Home", label: "Home", color: "bg-cyan-400" },
    { id: "About-Me", label: "About Me", color: "bg-blue-400" },
    { id: "Work-Experience", label: "Experience", color: "bg-emerald-400" },
    { id: "Projects", label: "Projects", color: "bg-indigo-400" },
  ];

  return (
    <>
      <nav className="fixed w-full xl:py-6 xl:px-10 p-6 flex justify-end bg-(--bg-dark) z-40">
        <div className="flex items-center gap-12">
          <NavLink
            to={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              md:inline-block
              lg:inline-block
              xl:inline-block
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
            View Resume
          </NavLink>

          <div
            onClick={handleOpenMenu}
            className="
              text-(--primary)
              cursor-pointer
              transition-transform duration-300
            "
          >
            <TbMenu3
              className={`
                text-3xl
                ${rotating ? "rotate-180" : "rotate-0"}
                transition-transform duration-200
              `}
            />
          </div>
        </div>
      </nav>

      <div
        onClick={closeMenu}
        className={`
          fixed inset-0
          bg-black/50 backdrop-blur-sm
          transition-opacity duration-500
          z-50
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
          fixed top-0 right-0 h-full
          bg-(--bg-dark) z-50
          border-l border-white/10

          w-screen
          sm:w-[80vw]
          md:w-[60vw]
          lg:w-[45vw]
          xl:w-[38vw]
          2xl:w-[35vw] 2xl:min-w-105 2xl:max-w-170

          transition-transform duration-500 ease-[cubic-bezier(.25,.8,.25,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div
          onClick={closeMenu}
          className="
            text-(--secondary)
            xl:text-2xl text-xl cursor-pointer
            fixed w-full p-6 flex justify-end z-40
            bg-(--bg-dark)
          "
        >
          <RxCross1
            onClick={closeMenu}
            className="transition-transform duration-300 "
          />
        </div>

        <div
          className="
            px-8 pt-20 pb-10
            xl:pt-40 md:pt-70 lg:pt-40
            flex flex-col h-full
            text-(--secondary)
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
            <section>
              <p className="uppercase text-sm tracking-widest text-(--secondary-light)">
                Menu
              </p>

              <ul className="mt-6 xl:text-base text-[0.9rem] font-medium space-y-4 uppercase">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={`#${link.id}`}
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

              <ul className="mt-6 xl:text-base text-[0.9rem] font-medium space-y-3 uppercase">
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

          <footer className="mt-auto pt-10">
            <p className="uppercase text-sm tracking-widest text-(--secondary-light)">
              Get in touch
            </p>

            <NavLink
              to="mailto:singhguarav07004@gmail.com"
              className="mt-3 flex items-center gap-3 group transition xl:text-base text-[1 rem]"
            >
              <IoMailOutline className="group-hover:text-(--primary) transition" />
              <span className="group-hover:text-(--primary) transition">
                singhguarav07004@gmail.com
              </span>
            </NavLink>
          </footer>
        </div>
      </aside>
    </>
  );
}
