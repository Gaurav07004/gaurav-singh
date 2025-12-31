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
    <section className="max-w-300 mx-auto px-12 py-20 font-[Quicksand] bg-(--bg-dark)">
      <Link to="/" className="flex items-center gap-2">
        <HiOutlineArrowLeft className="text-lg font-bold text-(--primary) uppercase" />{" "}
        <span className="text-base font-bold text-(--primary) uppercase">
          Back
        </span>
      </Link>

      <h1 className="mt-4 text-4xl font-bold text-(--primary)">
        {project.name} - {project.type}
      </h1>

      <p className="mt-6 text-base text-(--secondary-light) text-justify">
        {project.description}
      </p>

      <img
        src={project.image}
        alt={project.name}
        className="mt-6 w-full h-full rounded object-contain"
      />

      <h3 className="mt-8 text-base uppercase font-semibold text-(--primary)">
        Technologies Used
      </h3>

      <ul className="mt-2 flex gap-3 flex-wrap">
        {project.techAndTechnique.map((skill) => (
          <li
            key={skill}
            className="px-3 py-2
                    rounded text-sm
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

      <h3 className="mt-8 text-base uppercase font-semibold text-(--primary)">
        Key Features
      </h3>

      <ul className="mt-3 text-(--secondary-light)">
        {project.keyFeatures.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <RiArrowRightSLine className="text-base text-(--primary)" />
            {feature}
          </div>
        ))}
      </ul>

      <h3 className="mt-8 text-base font-semibold text-(--primary) uppercase">
        Technical Highlights
      </h3>

      <ul className="mt-3 text-(--secondary-light)">
        {project.technicalHighlights.map((technicalHighlights) => (
          <div key={technicalHighlights} className="flex items-center gap-2">
            <RiArrowRightSLine className="text-base text-(--primary)" />
            {technicalHighlights}
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
          Project Demo
        </Link>

        <Link
          to={project.gitHub}
          target="_blank"
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
          Source Code
        </Link>
      </div>
    </section>
  );
}
