import Admin360 from "../../assets/Admin360.png";
import NextBoarding from "../../assets/NextBoarding.png";
import Travel from "../../assets/TravelIcon.svg";
import Admin from "../../assets/AdminIcon.svg";

const projects = [
  {
    id: "next-boarding",
    name: "Next Boarding",
    type: "Full Stack Travel Booking Platform",
    year: 2024,
    icon: Travel,
    image: NextBoarding,

    techAndTechnique: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "JWT Authentication",
      "Authorization",
      "Protected Routes",
      "Component-Based Architecture",
      "Responsive Design",
      "Form Validation",
      "API Integration",
      "Async/Await",
      "Nodemailer",
      "Email Verification",
      "Password Recovery",
      "Git",
      "GitHub",
      "Vercel",
    ],

    description:
      "Next Boarding is a full-stack travel booking platform built with the MERN stack to simplify the complete travel reservation experience. The application enables users to browse trips, select seats with real-time visual feedback, securely authenticate, complete bookings, and receive automated email notifications. Designed with a scalable architecture and responsive interface, the platform focuses on delivering a seamless booking workflow while maintaining clean code, secure authentication, and efficient frontend-backend communication.",

    keyFeatures: [
      "User registration, login, and JWT-based authentication",
      "Email verification and password recovery",
      "Interactive seat selection with real-time visual feedback",
      "Trip search and booking management",
      "Secure booking workflow",
      "Automated booking confirmation emails",
      "Responsive design for desktop, tablet, and mobile",
      "RESTful API-based frontend and backend communication",
      "Protected routes and authorization",
      "Clean and intuitive user experience",
    ],

    technicalHighlights: [
      "Designed and developed a modular React.js frontend using reusable components for improved maintainability and scalability.",
      "Built RESTful APIs with Node.js and Express.js to manage authentication, trips, bookings, users, and seat availability.",
      "Designed MongoDB collections and relationships for efficient storage of user profiles, trips, bookings, and seat allocation.",
      "Implemented JWT authentication with protected routes, secure session handling, email verification, and password reset workflows.",
      "Integrated Nodemailer to automate account verification, password recovery, and booking confirmation emails.",
      "Developed an interactive seat selection interface with dynamic availability updates and intuitive visual feedback.",
      "Applied responsive design principles to ensure a consistent experience across desktop, tablet, and mobile devices.",
      "Implemented client-side validation, backend validation, and structured error handling to improve application reliability.",
      "Maintained a clean project structure with separation of concerns between UI, business logic, API services, and database operations.",
      "Optimized API communication and frontend rendering to deliver a smooth, responsive, and user-friendly booking experience.",
    ],

    gitHub: "https://github.com/Gaurav07004/NextBoarding",

    demo: "https://www.linkedin.com/posts/gaurav-singh-668584237_nextboarding-traveltech-mernstack-activity-7193467109752877058-HcJz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADr-0rAB53gaRA4RCJOLGPkCK1M7v3fPayY",
  },

  {
    id: "admin-360",
    name: "Admin 360",
    type: "Enterprise Administration Dashboard",
    year: 2024,
    icon: Admin,
    image: Admin360,

    techAndTechnique: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "MongoDB",
      "Next.js API Routes",
      "RESTful APIs",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Chart.js",
      "Data Visualization",
      "Component-Based Architecture",
      "Protected Routes",
      "Git",
      "GitHub",
      "Vercel",
    ],

    description:
      "Admin 360 is a full-stack enterprise administration dashboard built with Next.js to simplify business operations through secure authentication, role-based access control, and centralized data management. The platform enables administrators to manage customers, products, and orders through an intuitive interface while providing real-time business insights using interactive dashboards and data visualization. Designed with a scalable architecture, reusable UI components, and efficient state management, the application delivers a secure and responsive administrative experience.",

    keyFeatures: [
      "JWT-based authentication and secure admin login",
      "Role-Based Access Control (RBAC)",
      "Customer management module",
      "Product management module",
      "Order management module",
      "Interactive analytics dashboard",
      "Chart-based business insights",
      "Redux-powered global state management",
      "Protected routes and secure API access",
      "Responsive admin interface with Dark Mode support",
    ],

    technicalHighlights: [
      "Developed a scalable administrative dashboard using Next.js with reusable and modular React components.",
      "Implemented JWT authentication and Role-Based Access Control (RBAC) to secure sensitive administrative operations.",
      "Built Next.js API Routes for authentication, CRUD operations, and backend communication.",
      "Integrated Redux Toolkit for centralized state management, improving data consistency and application performance.",
      "Designed MongoDB schemas to efficiently manage customers, products, orders, and administrative data.",
      "Created interactive dashboards with Chart.js to visualize key business metrics and operational insights.",
      "Implemented responsive layouts optimized for desktop-first administrative workflows while maintaining mobile compatibility.",
      "Applied clean architecture principles with clear separation of UI, business logic, API services, and database operations.",
      "Optimized data fetching, state synchronization, and rendering performance for a smooth user experience.",
      "Maintained a scalable and maintainable codebase following modern full-stack development best practices.",
    ],

    gitHub: "https://github.com/Gaurav07004/Admin360",

    demo: "https://www.linkedin.com/posts/gaurav-singh-668584237_webdevelopment-nextjs-react-activity-7281164950553673728-1Y3N?utm_source=share&utm_medium=member_desktop&rcm=ACoAADr-0rAB53gaRA4RCJOLGPkCK1M7v3fPayY",
  },
];

export default projects;
