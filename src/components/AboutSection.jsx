import { IoFlowerOutline } from "react-icons/io5";
import {
  aboutParagraphs,
  coreProfile,
  currentFocus,
  skills,
} from "../data/Content/Content";

export default function AboutSection() {
  return (
    <section
      id="About-Me"
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
          About Me
        </span>
      </h2>

      {aboutParagraphs.map((text, idx) => (
        <p
          key={idx}
          className="
            mt-4
            text-(--secondary-light)
            leading-relaxed
            text-[15px]
            text-justify

            sm:text-base
            md:text-[17px]
            xl:max-w-full
          "
        >
          {text}
        </p>
      ))}

      <h3 className="mt-10 text-base font-bold text-(--secondary-light) uppercase">
        Core Development Profile
      </h3>

      <div
        className="
          mt-4
          grid grid-cols-1
          gap-4

          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {coreProfile.map((item) => (
          <div
            key={item.title}
            className="
              p-6 rounded-lg
              bg-(--chip)
              border border-(--border)
            "
          >
            <p className="text-sm uppercase tracking-wide text-(--secondary-light)">
              {item.title}
            </p>
            <h4 className="mt-2 xl:text-[1.05rem] text-[0.9rem] font-semibold text-(--primary)">
              {item.value}
            </h4>
          </div>
        ))}
      </div>

      <div
        className="
          mt-4
          p-6 rounded-lg
          bg-(--chip)
          border border-(--border)
        "
      >
        <p className="text-sm uppercase tracking-wide text-(--secondary-light)">
          Currently strengthening expertise in
        </p>

        <h4 className="mt-2 xl:text-[1.05rem] text-[0.9rem] font-semibold text-(--primary)">
          {currentFocus.map((item, index) => (
            <span key={item}>
              {item}
              {index !== currentFocus.length - 1 && (
                <span className="text-(--secondary-light)"> | </span>
              )}
            </span>
          ))}
        </h4>
      </div>

      <h3 className="mt-10 text-base font-bold text-(--secondary-light) uppercase">
        Technical Skills
      </h3>

      <div
        className="
          mt-4
          grid grid-cols-1
          gap-4

          sm:grid-cols-2
          xl:grid-cols-2
        "
      >
        {skills.map((group) => (
          <div
            key={group.category}
            className="
              p-6 rounded-lg
              bg-(--chip)
              border border-(--border)
            "
          >
            <p className="text-sm uppercase tracking-wide text-(--secondary-light)">
              {group.category}
            </p>

            <div className="mt-3 flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <div
                  key={`${group.category}-${skill.name}`}
                  className="
                    flex items-center gap-2
                    px-3 py-2
                    rounded-md
                    bg-[#1d1f23]
                    border border-[#2a2d31]
                    hover:border-(--primary)
                    hover:bg-[#22262b]
                    transition
                  "
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="xl:text-sm text-[0.8rem] text-(--secondary)">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
