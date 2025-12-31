import { Routes, Route } from "react-router-dom";

import Portfolio from "./Portfolio"; // main page
// import ProjectDetails from "./pages/ProjectDetails";
// import NotFound from "./pages/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      {/* <Route path="/projects/:slug" element={<ProjectDetails />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
