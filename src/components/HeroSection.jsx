import ArrowAnimation from "./ArrowAnimation";

const stats = [
  { value: "2", label: "Years of Development Experience" },
  { value: "5", label: "Completed Projects" },
  { value: "400", label: "Hours of Practical Learning" },
];

export default function DashboardContent() {
  return (
    <main
      className="
        font-[Quicksand]
        max-w-337.5 mx-auto
        px-12 pt-45 pb-15
        flex justify-between gap-16
        items-start
      "
    >
      <section className="max-w-3xl">
        <h1
          className="
            text-[64px] font-extrabold uppercase leading-[1.05]
            text-(--secondary)
          "
        >
          I'm <br />
          <span className="text-(--secondary)">Gaurav Singh,</span>
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-(--primary)">
          A Full Stack Engineer
        </h2>

        <p
          className="
            mt-6 text-lg
            text-(--secondary-light)
            leading-relaxed
            max-w-3xl
            text-justify
          "
        >
          I build scalable, user-focused web applications with clean interfaces,
          reliable backends, and strong performance. I enjoy working across the
          stack from intuitive UI design to secure APIs and database systems,
          focusing on clean architecture, maintainable code, and real-world
          impact.
        </p>

        <button
          className="
            mt-8 px-7 py-4 rounded text-sm uppercase
            border border-(--primary)
            text-(--primary)
            hover:bg-(--primary-light)
            hover:border-(--primary-light)
            hover:text-black
            transition
            tracking-wide
          "
        >
          Get In Touch
        </button>
      </section>

      <section className="flex flex-col items-end gap-14 text-right mt-40">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="text-5xl font-extrabold text-(--primary) leading-none">
              {item.value}
              <span className="text-4xl">+</span>
            </p>

            <p className="mt-2 text-[12px] tracking-wider text-(--secondary-light)">
              {item.label}
            </p>
          </div>
        ))}
      </section>
      <ArrowAnimation />
    </main>
  );
}
