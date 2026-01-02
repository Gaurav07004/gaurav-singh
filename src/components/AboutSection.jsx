import { IoFlowerOutline } from "react-icons/io5";
import Javascript from "../assets/javascript.svg";
import CPP from "../assets/CPP.svg";
import HTML5 from "../assets/HTML5.svg";
import CSS3 from "../assets/CSS3.svg";
import React from "../assets/React.svg";
import ReactHooks from "../assets/ReactHooks.svg";
import Redux from "../assets/Redux.svg";
import NextJs from "../assets/NextJs.svg";
import Tailwind from "../assets/Tailwind.svg";
import ShadcnUI from "../assets/ShadcnUI.svg";
import ChartJs from "../assets/ChartJs.svg";
import NodeJs from "../assets/NodeJs.svg";
import ExpressJs from "../assets/ExpressJs.svg";
import RESTfulAPIs from "../assets/RESTfulAPIs.svg";
import JWTToken from "../assets/JWTToken.svg";
import Nodemailer from "../assets/Nodemailer.svg";
import MongoDB from "../assets/MongoDB.svg";
import Git from "../assets/Git.svg";
import GitHub from "../assets/GitHub.svg";
import Postman from "../assets/Postman.svg";
import Render from "../assets/Render.svg";
import Vercel from "../assets/Vercel.svg";
import Figma from "../assets/Figma.svg";
import MYSQL from "../assets/MYSQL.svg";
import PostgreSQL from "../assets/PostgreSQL.svg";

export default function AboutSection() {
  const aboutParagraphs = [
    `I am Gaurav Singh, a Full Stack Engineer and B.Tech Computer Science graduate from the University of Mumbai (2025). I work across the stack with ReactJS, NodeJS, ExpressJS, and MongoDB, focusing on building scalable web applications, improving user experience, and delivering reliable backend systems.`,
    `I have built booking platforms, admin dashboards, and data-driven applications, working on performance optimization, REST API integration, authentication, and responsive UI development. I follow clean coding practices and take a structured, problem-solving approach while developing features and systems.`,
    `I am currently strengthening my expertise in backend engineering, system design, and scalable architecture, and I look forward to contributing to impactful engineering teams and real-world products.`,
  ];

  const coreProfile = [
    { title: "Specialization", value: "Full Stack Development" },
    { title: "Focus Areas", value: "Backend Systems & API Development" },
    {
      title: "Development Mindset",
      value: "Clean Architecture & Maintainable Codebase",
    },
  ];

  const currentFocus = [
    "System Design",
    "Performance Engineering",
    "Scalable Architecture",
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: "C++", icon: CPP },
        { name: "JavaScript", icon: Javascript },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML5", icon: HTML5 },
        { name: "CSS3", icon: CSS3 },
        { name: "ReactJs", icon: React },
        { name: "React Hooks", icon: ReactHooks },
        { name: "Redux", icon: Redux },
        { name: "NextJs", icon: NextJs },
        { name: "Tailwind CSS", icon: Tailwind },
        { name: "Shadcn UI", icon: ShadcnUI },
        { name: "ChartJs", icon: ChartJs },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "NodeJs", icon: NodeJs },
        { name: "ExpressJs", icon: ExpressJs },
        { name: "RESTful APIs", icon: RESTfulAPIs },
        { name: "JWT Authentication", icon: JWTToken },
        { name: "Nodemailer", icon: Nodemailer },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: MongoDB },
        { name: "MySQL", icon: MYSQL },
        { name: "PostgreSQL", icon: PostgreSQL },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: Git },
        { name: "GitHub", icon: GitHub },
        { name: "Postman", icon: Postman },
        { name: "Render", icon: Render },
        { name: "Vercel", icon: Vercel },
        { name: "Figma", icon: Figma },
      ],
    },
  ];

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
          {currentFocus.join(" | ")}
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
