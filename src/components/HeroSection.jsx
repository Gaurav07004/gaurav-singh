import ArrowAnimation from "./ArrowAnimation";
import { NavLink } from "react-router-dom";
import { stats, about } from "../data/Content/Content";
import Resume from "../data/Resume/Gaurav_Singh.pdf";
import ScrollToTop from "./ScrollToTop";

export default function DashboardContent() {
  return (
    <main
      id="Home"
      className="
        font-[Quicksand]
        max-w-337.5 mx-auto
        flex flex-col
        items-center
        gap-14
        
        px-6 pt-30 pb-10
        sm:px-8 sm:pt-30
        md:px-10 md:pt-50
        lg:px-12 lg:pt-50
        xl:px-6

        md:flex-col md:justify-between md:items-start md:gap-8
        xl:flex-row xl:items-start xl:gap-14
      "
    >
      {about.map((profile) => (
        <section
          className="
            max-w-3xl
            text-center md:text-left

            xl:max-w-337.5
          "
        >
          <h1
            className="
              text-[40px] font-extrabold uppercase leading-[1.1]
              text-(--secondary)

              sm:text-[50px]
              md:text-[58px]
              lg:text-[64px]
              xl:text-[68px]
            "
          >
            I'm <br />
            <span className="text-(--secondary)">{profile.name},</span>
          </h1>

          <h2
            className="
              mt-3
              text-2xl font-semibold text-(--primary)
              sm:text-[26px]
              md:text-2xl
              xl:text-[28px]
            "
          >
            {profile.designation}
          </h2>

          <p
            className="
              mt-5
              text-[15px]
              text-(--secondary-light)
              leading-relaxed
              text-justify
              max-w-3xl

              sm:text-base
              md:text-lg 

              xl:max-w-full
              xl:leading-[1.85]
            "
          >
            {profile.about}
          </p>

          <section className="md:inline-block flex justify-center items-center gap-4 mt-2 xl:mt-6">
            <NavLink
              to="mailto:singhguarav07004@gmail.com"
              className="
                mt-6
                inline-block
                px-6 py-3
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
              Get In Touch
            </NavLink>

            <NavLink
              to={Resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Gaurav Singh resume"
              aria-roledescription="Resume link"
              tabIndex={0}
              referrerPolicy="no-referrer"
              data-analytics="resume-click"
              data-testid="resume-link"
              className="
                md:hidden lg:hidden
                inline-block
                mt-6
                px-6 py-3
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
          </section>
        </section>
      ))}

      <section
        className="
          flex flex-row flex-wrap justify-center
          gap-10 text-center

          sm:gap-12

          md:w-full md:flex-row md:justify-between md:items-center md:mt-20

          lg:mt-20

          xl:flex-col xl:items-end xl:text-right xl:gap-16 xl:mt-32
        "
      >
        {stats.map((item) => (
          <div key={item.label}>
            <p className="text-4xl sm:text-5xl font-extrabold text-(--primary) leading-none">
              {item.value}
              <span className="text-3xl sm:text-4xl">+</span>
            </p>

            <p className="mt-2 text-[11px] sm:text-[12px] tracking-wider text-(--secondary-light)">
              {item.label}
            </p>
          </div>
        ))}
      </section>

      <ArrowAnimation />
      <ScrollToTop />
    </main>
  );
}
