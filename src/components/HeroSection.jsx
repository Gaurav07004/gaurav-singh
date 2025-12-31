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
      max-w-350 mx-auto
      px-12 py-10
      flex justify-between gap-10
    "
    >
      {/* LEFT CONTENT */}
      <section className="max-w-3xl">
        <h1 className="text-[60px] font-bold leading-[1.1] uppercase text-(--secondary)">
          I'm <br />
          <span className="text-(--secondary)">Gaurav Singh,</span>
        </h1>

        <h2 className="mt-3 text-3xl font-semibold text-(--primary)">
          A Full Stack Engineer
        </h2>

        <p className="mt-6 text-lg text-(--secondary-light) leading-relaxed text-justify">
          I build scalable, user-focused web applications with clean interfaces,
          reliable backends, and strong performance. I enjoy working across the
          stack, from designing intuitive UI to implementing secure APIs and
          database logic. My focus is on writing clean, maintainable code,
          improving usability, and building features that solve real-world
          problems and deliver measurable value to users.
        </p>

        <button
          className="mt-8 px-6 py-4 rounded text-sm uppercase
          border border-(--primary)
          text-(--primary)
          hover:bg-(--primary-light) hover:border-(--primary-light) hover:text-white transition"
        >
          Get In Touch
        </button>
      </section>

      {/* RIGHT STATS */}
      <section className="flex flex-col items-end gap-14 text-right mt-40">
        {stats.map((item) => (
          <div key={item.label}>
            <p className="text-5xl font-extrabold text-(--primary) leading-none">
              {item.value}
              <span className="text-4xl">+</span>
            </p>
            <p className="text-(--secondary-light) mt-2 text-sm tracking-wide">
              {item.label}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
