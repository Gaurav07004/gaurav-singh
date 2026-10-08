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
      "React Hooks",
      "Redux Toolkit",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Protected Routes",
      "Responsive Design",
      "API Integration",
      "Nodemailer",
      "Email Verification",
      "Password Recovery",
      "Git",
      "GitHub",
    ],

    description:
      "Next Boarding is a full-stack travel booking platform built with the MERN stack. Users can search trips, select seats on an interactive seat map, manage their bookings, and receive booking confirmation emails. The platform includes JWT authentication with role-based access control, email verification, and password recovery.",

    keyFeatures: [
      "User registration, login, and JWT-based authentication",
      "Role-based access control and protected routes",
      "Email verification and password recovery",
      "Trip search and booking management",
      "Multi-step booking flow",
      "Interactive seat map for seat selection",
      "Booking confirmation emails using Nodemailer",
      "Responsive design for desktop, tablet, and mobile",
    ],

    technicalHighlights: [
      "Built multi-step booking flows, trip search, and interactive seat maps using React.js, React Hooks, and Redux Toolkit.",
      "Developed REST APIs with Node.js, Express.js, and MongoDB to manage trips, users, seats, and booking data.",
      "Implemented JWT authentication, role-based access control, and protected routes to secure user and booking features.",
      "Integrated Nodemailer for email verification, password recovery, and booking confirmation emails.",
      "Added client-side and server-side validation with structured error handling across booking and account flows.",
      "Kept a clear separation between UI, API services, and database operations for easier maintenance.",
    ],

    gitHub: "https://github.com/Gaurav07004/NextBoarding",

    demo: "https://www.linkedin.com/posts/gaurav-singh-668584237_nextboarding-traveltech-mernstack-activity-7193467109752877058-HcJz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADr-0rAB53gaRA4RCJOLGPkCK1M7v3fPayY",
  },

  {
    id: "admin-360",
    name: "Admin 360",
    type: "Admin Dashboard",
    year: 2024,
    icon: Admin,
    image: Admin360,

    techAndTechnique: [
      "Next.js",
      "JavaScript",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "MongoDB",
      "Next.js API Routes",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "Protected Routes",
      "Chart.js",
      "Data Visualization",
      "Nodemailer",
      "Git",
      "GitHub",
    ],

    description:
      "Admin 360 is a full-stack admin dashboard built with Next.js for managing customers, products, and orders. It includes data tables with search, filtering, and pagination, interactive Chart.js visualizations, dark mode, JWT authentication with role-based access control, and automated email notifications.",

    keyFeatures: [
      "JWT-based authentication and secure admin login",
      "Role-based access control and protected API routes",
      "Customer, product, and order management modules",
      "Data tables with search, filtering, and pagination",
      "Interactive dashboard with Chart.js visualizations",
      "Redux Toolkit for application state management",
      "Automated email notifications using Nodemailer",
      "Responsive admin interface with dark mode",
    ],

    technicalHighlights: [
      "Built a full-stack admin dashboard with Next.js and MongoDB to manage customers, products, and orders.",
      "Developed backend APIs using Next.js API Routes to handle CRUD operations and business logic.",
      "Built data tables with search, filtering, pagination, and dark mode, using Redux Toolkit for state management.",
      "Implemented JWT authentication, role-based access control, and protected API routes to restrict features by user role.",
      "Created interactive Chart.js dashboards to visualize key business metrics.",
      "Automated email notifications using Nodemailer.",
    ],

    gitHub: "https://github.com/Gaurav07004/Admin360",

    demo: "https://www.linkedin.com/posts/gaurav-singh-668584237_webdevelopment-nextjs-react-activity-7281164950553673728-1Y3N?utm_source=share&utm_medium=member_desktop&rcm=ACoAADr-0rAB53gaRA4RCJOLGPkCK1M7v3fPayY",
  },
];

export default projects;
