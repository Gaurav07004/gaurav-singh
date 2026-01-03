import Admin360 from "../../assets/Admin360.png";
import NextBoarding from "../../assets/NextBoarding.png";
import Travel from "../../assets/TravelIcon.svg";
import Admin from "../../assets/AdminIcon.svg";
const projects = [
  {
    id: "next-boarding",
    name: "Next Boarding",
    type: "Travel Booking Platform",
    year: 2024,
    icon: Travel,
    image: NextBoarding,
    techAndTechnique: [
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "RESTful APIs",
      "Authentication",
      "Email Notifications",
      "Nodemailer",
    ],
    description:
      "Next Boarding is a full-stack travel booking application designed with a focus on usability, real-time interaction, and smooth booking workflows. I developed a responsive and interactive booking interface with seat selection and real-time visual feedback, along with RESTful APIs for trip management, seat availability, bookings, and user data. I implemented secure authentication features including email-based password recovery and user verification, and integrated real-time email notifications for booking confirmations and status updates to improve user trust and reduce booking errors.",
    keyFeatures: [
      "Interactive seat selection with real-time visual feedback",
      "Responsive and intuitive booking interface",
      "Secure user authentication and verification",
      "Email-based password recovery",
      "Instant booking confirmation emails",
      "Real-time booking status notifications",
      "Trip, seat availability, and booking management modules",
    ],
    technicalHighlights: [
      "Developed a responsive and interactive booking interface using React.js with reusable, modular UI components to improve usability",
      "Implemented seat selection with real-time visual feedback and smooth booking workflows integrated through RESTful APIs",
      "Built backend logic using Node.js and Express.js to handle trips, bookings, users, and seat availability with reliable data flow",
      "Used MongoDB to manage booking records, user data, and seat allocation with structured schema design",
      "Integrated frontend forms and authentication workflows with secure API endpoints and validation handling",
      "Implemented user authentication, email verification, and password recovery features",
      "Added automated booking confirmation and status update emails using Nodemailer",
      "Optimized performance across UI rendering, API communication, and data handling for a smoother user experience",
      "Ensured clean architecture, scalable endpoint structure, and consistent frontend–backend communication",
    ],
    gitHub: "https://github.com/Gaurav07004/NextBoarding",
    demo: "https://www.linkedin.com/posts/gaurav-singh-668584237_nextboarding-traveltech-mernstack-activity-7193467109752877058-HcJz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADr-0rAB53gaRA4RCJOLGPkCK1M7v3fPayY",
  },

  {
    id: "admin-360",
    name: "Admin 360",
    type: "Administrative Dashboard",
    year: 2024,
    icon: Admin,
    image: Admin360,
    techAndTechnique: [
      "NextJs",
      "MongoDB",
      "Redux",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "NextJs API Routes",
      "Data Visualization",
    ],
    description:
      "Admin 360 is a role-based administrative dashboard designed for managing customers, orders, and products with a focus on security, usability, and efficient data handling. I developed responsive dashboard interfaces, implemented JWT authentication with role-based access control, and integrated Redux for global state management to improve performance, consistency, and API communication.",
    keyFeatures: [
      "JWT-based authentication for secure admin access",
      "Role-Based Access Control (RBAC) to restrict sensitive operations",
      "Dashboard modules for customers, orders, and products",
      "Real-time data visualization panels",
      "Centralized Redux state management",
      "Dark Mode support",
      "Desktop-optimized responsive layouts for admin workflows",
    ],
    technicalHighlights: [
      "Implemented authentication and RBAC within Next.js API routes to secure admin features and protected resources",
      "Developed dashboard-driven UI components with a focus on clarity, readability, and usability",
      "Integrated Redux for global state management and optimized API-driven data workflows",
      "Structured modules for customers, orders, and products with maintainable data handling patterns",
      "Built real-time visualization panels to support data-driven decision making",
      "Designed layouts optimized for desktop-first admin use cases and extended with Dark Mode",
      "Improved application performance through efficient data fetching and state synchronization",
      "Ensured clean architecture and scalable code structure across UI and backend layers",
    ],
    gitHub: "https://github.com/Gaurav07004/Admin360",
    demo: "https://www.linkedin.com/posts/gaurav-singh-668584237_webdevelopment-nextjs-react-activity-7281164950553673728-1Y3N?utm_source=share&utm_medium=member_desktop&rcm=ACoAADr-0rAB53gaRA4RCJOLGPkCK1M7v3fPayY",
  },
];

export default projects;
