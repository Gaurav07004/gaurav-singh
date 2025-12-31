import { Routes, Route } from "react-router-dom";

import Portfolio from "./Portfolio"; // main page
import ProjectDetails from "./pages/ProjectDetails";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
    </Routes>
  );
}
