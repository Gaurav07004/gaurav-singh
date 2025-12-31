import { IoFlowerOutline } from "react-icons/io5";

const projects = [
  {
    title: "Next Boarding",
    type: "Travel Booking Platform",
    duration: "2025",
    description:
      "Next Boarding is a full-stack travel booking application designed with a focus on usability, real-time interaction, and smooth booking workflows. I developed a responsive and interactive booking interface with seat selection and real-time visual feedback, along with RESTful APIs for trip management, seat availability, bookings, and user data. I implemented secure authentication features including email-based password recovery and user verification, and integrated real-time email notifications for booking confirmations and status updates to improve user trust and reduce booking errors.",
    live: "View Details",
  },
  {
    title: "Admin 360",
    type: "Administrative Dashboard",
    duration: "2025",
    description:
      "Admin 360 is a full-stack role-based admin dashboard built to manage customers, orders, and product data with clarity and efficiency. I developed responsive dashboard interfaces, implemented JWT-based authentication with RBAC for secure admin access, and used Redux for global state management to improve data consistency and API performance. I also built real-time data visualizations, added Dark Mode support, and optimized layouts for desktop environments to enhance usability and decision-making.",
    live: "View Details",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        font-[Quicksand]
        max-w-337.5 mx-auto
        px-12 pt-15 pb-15
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
            key={project.title}
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
                  {project.title} - {project.type}
                </h3>

                <p className="text-[15px] text-(--secondary-light)">
                  {project.duration}
                </p>
              </div>

              <p className="mt-3 text-[15px] text-(--secondary-light) text-justify">
                {project.description}
              </p>
            </section>

            <div className="mt-5 flex gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="
                    border border-(--primary)
                    text-(--primary)
                    uppercase px-5 py-3 rounded text-sm
                    hover:bg-(--primary-light)
                    hover:border-(--primary-light)
                    hover:text-black
                    transition
                  "
                >
                  View Details
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
