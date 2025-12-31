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
        px-12 pt-30 pb-10
      "
    >
      <h2 className="flex items-center gap-4">
        <IoFlowerOutline className="text-2xl font-bold text-(--primary) uppercase slow-spin" />{" "}
        <span className="text-2xl font-bold text-(--primary) uppercase">
          Projects
        </span>
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="
              p-6 rounded-xl
              bg-(--chip)
              border border-(--border)
              transition
              flex flex-col justify-between items-start
            "
          >
            <section>
              <div className="flex justify-between items-center">
                <h3 className="text-[1.35rem] font-semibold text-white">
                  {project.name} - {project.type}
                </h3>

                <p className="text-[15px] text-(--secondary-light)">
                  {project.year}
                </p>
              </div>

              <p className="mt-3 text-[15px] text-(--secondary-light) text-justify">
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
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
