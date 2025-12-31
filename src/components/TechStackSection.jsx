const stackCategories = [
  {
    title: "Frontend",
    items: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose", "Mongo Atlas"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "Postman", "Agile", "VS Code"],
  },
];

export default function TechStackSection() {
  return (
    <section
      id="stack"
      className="
        font-[Quicksand]
        max-w-337.5 mx-auto
        px-12 pt-30 pb-20
      "
    >
      <header className="flex items-center gap-4">
        <h2 className="text-4xl font-bold text-(--primary) uppercase">
          My Tech Stack
        </h2>

        <span className="w-40 h-px bg-(--secondary-light)" />
      </header>

      <p className="mt-4 text-lg text-(--secondary-light) max-w-3xl">
        I work across the full stack with a focus on clean architecture,
        performance, and maintainable code.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6">
        {stackCategories.map((group) => (
          <div
            key={group.title}
            className="
              p-6 rounded-xl
              bg-(--chip)
              border border-(--border)
              hover:border-(--primary)
              transition
            "
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-(--primary)">
                {group.title}
              </h3>

              <div
                className="
                  w-6 h-6 rounded-full
                  border border-(--primary)
                  animate-[spin_22s_linear_infinite]
                "
              />
            </div>

            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="
                    px-3 py-1 text-[13px]
                    rounded-full
                    bg-(--badge)
                    border border-(--border)
                    text-(--secondary)
                    hover:text-(--primary)
                    hover:border-(--primary)
                    transition
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
