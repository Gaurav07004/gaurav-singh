// ==========================================================
// Section config — ids, nav labels and every section heading.
// Edit a title / subtitle here; <SectionTitle /> renders it everywhere.
// ==========================================================

export const SECTIONS = {
  home: {
    id: "Home",
    navLabel: "Home",
    navColor: "bg-cyan-400",
  },

  about: {
    id: "About-Me",
    navLabel: "About Me",
    navColor: "bg-purple-400",
    label: "About Me",
    title: "Software Developer Building Reliable SaaS Features.",
    description:
      "I build web applications with the MERN stack, with hands-on experience in React.js, Node.js, Express.js, MongoDB, REST APIs, JWT authentication, and role-based access control across attendance, payroll, approval workflows, and administrative dashboards.",
  },

  techStack: {
    id: "Tech-Stack",
    navLabel: "Tech Stack",
    navColor: "bg-orange-400",
    label: "Tech Stack",
    title: "Practical tools for building scalable full-stack products.",
    description:
      "A focused technology stack centered around React.js interfaces, Node.js and Express.js APIs, MongoDB databases, secure authentication, RESTful services, and modern software development practices.",
    focusLabel: "Currently Strengthening",
    focusTitle:
      "Expanding the technologies I use for scalable product development.",
  },

  experience: {
    id: "Work-Experience",
    navLabel: "Experience",
    navColor: "bg-emerald-400",
    label: "Experience",
    title: "Product engineering experience in real SaaS workflows.",
  },

  projects: {
    id: "Projects",
    navLabel: "Projects",
    navColor: "bg-red-400",
    label: "Projects",
    title: "Production-ready applications built for real users.",
    description:
      "A collection of full-stack applications focused on scalable React interfaces, secure backend systems, modern UI design, enterprise workflows, and real-world problem solving.",
  },

  contact: {
    id: "Contact",
    label: "Get In Touch",
    title: "Let's build something meaningful together.",
    availability: "AVAILABLE FOR OPPORTUNITIES",
    role: "Full Stack Developer",
    description:
      "I'm currently open to Full Stack Developer opportunities where I can contribute to scalable web applications, enterprise SaaS platforms, and modern full-stack solutions. Whether you're hiring, looking for a collaborator, or have an exciting project in mind, I'd be happy to connect and discuss how I can add value to your team. I look forward to hearing from you.",
  },
};

// Order shown in the navbar menu (sections without `navLabel` are skipped).
export const navLinks = [
  SECTIONS.home,
  SECTIONS.about,
  SECTIONS.techStack,
  SECTIONS.experience,
  SECTIONS.projects,
];
