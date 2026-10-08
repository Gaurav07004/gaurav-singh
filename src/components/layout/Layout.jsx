import Navbar from "./Navbar";
import PreLoader from "../common/PreLoader";
import ScrollToTop from "../common/ScrollToTop";

// Page shell: background decoration, navbar, preloader, scroll-to-top.
// Sections passed as children are laid out by `.portfolio-shell` (globals.css).
export default function Layout({ children }) {
  return (
    <main className="portfolio-shell bg-(--bg-dark) font-[Quicksand]">
      <Navbar />
      <PreLoader />
      {children}
      <ScrollToTop />
    </main>
  );
}
