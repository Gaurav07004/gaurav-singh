import { useParams, Link } from "react-router-dom";
import projects from "../data/Project/Project";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { RiArrowRightSLine } from "react-icons/ri";
import { useEffect } from "react";

export default function ProjectDetails() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <h2>Project not found</h2>;

  return (
    <section
      className="max-w-300 mx-auto px-6 pt-10 pb-10
        sm:px-8 sm:pt-20
        md:px-10 md:pt-20
        lg:px-12 lg:pt-20 lg:pb-16
        xl:px-6 font-[Quicksand] bg-(--bg-dark)"
    >
      <Link to="/" className="flex items-center gap-2 group w-fit">
        <HiOutlineArrowLeft className="xl:text-lg group-hover:text-(--secondary) font-bold text-(--primary) uppercase" />{" "}
        <span className="xl:text-base text-sm font-bold group-hover:text-(--secondary) text-(--primary) uppercase">
          Back
        </span>
      </Link>

      <h1 className="mt-4 xl:text-4xl text-2xl font-bold text-(--primary)">
        {project.name} : {project.type}
      </h1>

      <p className="mt-4 xl:text-base text-sm  text-(--secondary-light) text-justify">
        {project.description}
      </p>

      <img
        src={project.image}
        alt={project.name}
        className="mt-6 w-full h-full rounded object-contain"
      />

      <h3 className="mt-8 xl:text-base text-sm uppercase font-semibold text-(--primary)">
        Technologies Used
      </h3>

      <ul className="mt-2 flex gap-3 flex-wrap">
        {project.techAndTechnique.map((skill) => (
          <li
            key={skill}
            className="px-3 py-2
                    rounded xl:text-sm text-xs
                    bg-[#1d1f23]
                    border border-[#2a2d31]
                    hover:border-(--primary)
                    text-white
                    hover:bg-[#22262b]
                    transition"
          >
            {skill}
          </li>
        ))}
      </ul>

      <h3 className="mt-8 xl:text-base text-sm uppercase font-semibold text-(--primary)">
        Key Features
      </h3>

      <ul className="mt-3 text-(--secondary-light)">
        {project.keyFeatures.map((feature) => (
          <div key={feature} className="flex items-start gap-2 w-full mb-2">
            <div className="mt-1 width-1/2">
              <RiArrowRightSLine className="text-(--primary) width-1/2" />
            </div>
            <span className="width-1/2 xl:text-base text-sm">{feature}</span>
          </div>
        ))}
      </ul>

      <h3 className="mt-8 xl:text-base text-sm font-semibold text-(--primary) uppercase">
        Technical Highlights
      </h3>

      <ul className="mt-3 text-(--secondary-light)">
        {project.technicalHighlights.map((technicalHighlights) => (
          <div
            key={technicalHighlights}
            className="flex items-start gap-2 w-full mb-2"
          >
            <div className="mt-1 width-1/2">
              <RiArrowRightSLine className="text-(--primary) width-1/2" />
            </div>
            <span className="width-1/2 xl:text-base text-sm">
              {technicalHighlights}
            </span>
          </div>
        ))}
      </ul>

      <div className="flex gap-4 mt-6">
        <Link
          to={project.demo}
          target="_blank"
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
          Project Demo
        </Link>

        <Link
          to={project.gitHub}
          target="_blank"
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
          Source Code
        </Link>
      </div>
    </section>
  );
}
