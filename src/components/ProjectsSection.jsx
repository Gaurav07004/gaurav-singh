import { IoFlowerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import projects from "../data/Project/Project";

export default function Projects() {
  return (
    <section
      id="Projects"
      className="
        font-[Quicksand]
        max-w-337.5 mx-auto
        
        px-6 pt-20 pb-10
        sm:px-8 sm:pt-20
        md:px-10 md:pt-25
        lg:px-12 lg:pt-25
        xl:px-6 xl:pt-25
      "
    >
      <h2 className="flex items-center gap-4">
        <IoFlowerOutline className="text-2xl font-bold text-(--primary) uppercase slow-spin" />
        <span className="text-2xl font-bold text-(--primary) uppercase">
          Selected Projects
        </span>
      </h2>

      <div
        className="
          mt-6

          grid grid-cols-1
          gap-4

          sm:grid-cols-1
          lg:grid-cols-2 lg:gap-4
          xl:gap-4
        "
      >
        {projects.map((project) => (
          <div
            key={project.name}
            className="
              p-6
              rounded-xl
              bg-(--chip)
              border border-(--border)
              transition
              flex flex-col justify-between items-start

              sm:p-7
              md:p-8
            "
          >
            <section>
              <h3 className="xl:text-[1.25rem] sm:text-[1.2rem] text-base font-semibold text-white">
                {project.name} : {project.type}
              </h3>

              <p
                className="
                  mt-3
                  text-[14px]
                  text-(--secondary-light)
                  leading-relaxed
                  text-justify

                  sm:text-[15px]
                  md:text-[16px]
                  xl:max-w-5xl
                "
              >
                {project.description}
              </p>
            </section>

            <div className="mt-5 flex gap-4">
              <Link
                to={`/projects/${project.id}`}
                className="
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
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
