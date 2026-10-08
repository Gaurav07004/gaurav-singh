import { useState } from "react";
import { TbMenu3 } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { HiArrowUpRight } from "react-icons/hi2";
import { navLinks } from "../../data/sections";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";
import cx from "../../utils/cx";
import SocialLinks from "../common/SocialLinks";
import Footer from "./Footer";
import "./Navbar.css";

const MENU_LABEL = "uppercase text-sm tracking-widest text-(--secondary-light)";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [rotating, setRotating] = useState(false);

  useBodyScrollLock(open);

  const openMenu = () => {
    setRotating(true);
    setTimeout(() => {
      setOpen(true);
      setRotating(false);
    }, 250);
  };

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className="fixed w-full xl:py-6 xl:px-10 p-6 flex justify-end bg-(--bg-dark) z-40">
        <div className="flex items-center gap-12">
          <div
            onClick={openMenu}
            className="text-(--primary) cursor-pointer transition-transform duration-300"
          >
            <TbMenu3
              className={cx(
                "text-3xl transition-transform duration-200",
                rotating ? "rotate-180" : "rotate-0",
              )}
            />
          </div>
        </div>
      </nav>

      <div
        onClick={closeMenu}
        className={cx(
          "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 z-50",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      <aside
        role="dialog"
        aria-modal="true"
        className={cx(
          "fixed top-0 right-0 h-full bg-(--bg-dark) z-50 border-l border-white/10",
          "w-screen sm:w-[80vw] md:w-[60vw] lg:w-[45vw] xl:w-[38vw]",
          "2xl:w-[35vw] 2xl:min-w-105 2xl:max-w-170",
          "transition-transform duration-500 ease-[cubic-bezier(.25,.8,.25,1)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div
          onClick={closeMenu}
          className="text-(--secondary) xl:text-2xl text-xl cursor-pointer fixed w-full p-6 flex justify-end z-40 bg-(--bg-dark)"
        >
          <RxCross1 className="transition-transform duration-300" />
        </div>

        <div className="px-8 pt-20 pb-10 xl:pt-40 md:pt-70 lg:pt-40 flex flex-col h-full text-(--secondary)">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
            <section>
              <p className={MENU_LABEL}>Menu</p>

              <ul className="mt-6 xl:text-base text-[0.9rem] font-medium space-y-4 uppercase">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={closeMenu}
                      className="flex items-center gap-3 group transition"
                    >
                      <span
                        className={cx(
                          "relative w-3 h-3 rounded transition-all duration-300 group-hover:scale-200",
                          link.navColor,
                        )}
                      >
                        <span className="absolute inset-0 grid place-items-center text-black text-[9px] opacity-0 translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <HiArrowUpRight />
                        </span>
                      </span>

                      <span className="group-hover:translate-x-1 hover:text-(--primary) transition">
                        {link.navLabel}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <p className={MENU_LABEL}>Social</p>
              <SocialLinks />
            </section>
          </div>

          <Footer />
        </div>
      </aside>
    </>
  );
}
