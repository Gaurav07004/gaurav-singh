import { IoFlowerOutline } from "react-icons/io5";

export const experience = [
  {
    role: "Frontend Engineer — Intern",
    company: "Webxces Technologies",
    location: "Mumbai",
    locationType: "Onsite",
    duration: "June 2025 — September 2025",

    summary:
      "Worked as a Frontend Engineer Intern at Webxces Technologies, where I built responsive and performance-optimized web interfaces using React.js. I developed reusable component-based UI with React Hooks, implemented state management using Redux, and integrated RESTful APIs in collaboration with backend engineers. I also worked on interactive dashboards using Chart.js, optimized application performance through lazy loading and efficient rendering, and participated in agile processes such as sprint planning, daily standups, and code reviews while collaborating closely with designers and developers to deliver clean, maintainable features.",

    tech: [
      "ReactJs",
      "React Hooks",
      "Redux",
      "JavaScript",
      "ChartJs",
      "REST APIs",
      "Git",
      "GitHub",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="
        font-[Quicksand]
        max-w-337.5 mx-auto
        px-12 pt-15 pb-15
      "
    >
      <h2 className="flex items-center gap-4">
        <IoFlowerOutline className="text-2xl font-bold text-(--primary) uppercase slow-spin" />{" "}
        <span className="text-2xl font-bold text-(--primary) uppercase">
          Work Experience
        </span>
      </h2>

      <div className="mt-6 space-y-8">
        {experience.map((job) => (
          <div
            key={job.role}
            className="
              p-6 rounded-lg
              bg-(--chip)
              border border-(--border)
              transition
            "
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[1.35rem] font-semibold text-white">
                  {job.role} @ {job.company}
                </h3>

                <p className="mt-1 text-(--secondary-light)">
                  {job.locationType} | {job.location}
                </p>
              </div>

              <p className="text-[15px] text-(--secondary-light)">
                {job.duration}
              </p>
            </div>

            <p className="mt-3 text-[15px] text-(--secondary-light)">
              {job.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((item) => (
                <span
                  key={item}
                  className="
                    flex items-center gap-2
                    px-3 py-2
                    rounded-md
                    bg-[#1d1f23]
                    border border-[#2a2d31]
                    hover:border-(--primary)
                    hover:bg-[#22262b]
                    transition
                    text-(--secondary)
                    text-xs
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
