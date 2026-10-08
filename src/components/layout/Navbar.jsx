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

const MENU_LABEL = "uppercase text-xs tracking-widest text-(--secondary-light)";

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

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* ======================================================
          Navbar
      ====================================================== */}

      <nav className="fixed top-0 left-0 w-full z-40 flex justify-end">
        <div className="flex items-center">
          <button
            type="button"
            onClick={openMenu}
            aria-label="Open navigation menu"
            aria-expanded={open}
            className="text-(--primary)"
          >
            <TbMenu3
              className={cx(
                "text-2xl transition-transform duration-200",
                rotating ? "rotate-180" : "rotate-0",
              )}
            />
          </button>
        </div>
      </nav>

      {/* ======================================================
          Backdrop
      ====================================================== */}

      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={cx(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm",
          "transition-opacity duration-300",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      {/* ======================================================
          Menu Drawer
      ====================================================== */}

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cx(
          "fixed top-0 right-0 z-50",
          "h-[100dvh] max-h-[100dvh]",
          "bg-(--bg-dark)",
          "border-l border-(--border)",
          "shadow-[-20px_0_60px_rgba(81,23,17,0.12)]",
          "overflow-x-hidden overflow-y-auto",
          "transition-transform duration-500",
          "ease-[cubic-bezier(.25,.8,.25,1)]",
          "w-screen sm:w-[80vw] md:w-[60vw] lg:w-[45vw] xl:w-[38vw]",
          "2xl:w-[35vw] 2xl:min-w-105 2xl:max-w-170",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* ====================================================
            Drawer Header
        ==================================================== */}

        <div className="navbar-drawer-header">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="navbar-close-button text-(--secondary)"
          >
            <RxCross1 />
          </button>
        </div>

        {/* ====================================================
            Drawer Content
        ==================================================== */}

        <div className="navbar-drawer-content">
          <div className="navbar-drawer-grid">
            {/* Menu */}
            <section>
              <p className={MENU_LABEL}>Menu</p>

              <ul className="navbar-menu-list">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={closeMenu}
                      className="navbar-menu-link group"
                    >
                      <span className={cx("navbar-menu-dot", link.navColor)}>
                        <span className="navbar-menu-arrow">
                          <HiArrowUpRight />
                        </span>
                      </span>

                      <span className="navbar-menu-text">{link.navLabel}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Social */}
            <section>
              <p className={MENU_LABEL}>Social</p>

              <div className="navbar-social">
                <SocialLinks />
              </div>
            </section>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </aside>
    </>
  );
}
