import { SlArrowUp } from "react-icons/sl";
import useScrollVisibility from "../../hooks/useScrollVisibility";

export default function ScrollToTop() {
  const visible = useScrollVisibility(300);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-8 right-8
        w-11 h-11
        grid place-items-center
        rounded
        border border-(--primary)
        text-(--primary)
        transition-all duration-300
        cursor-pointer
      "
      aria-label="Scroll to top"
    >
      <SlArrowUp className="text-base font-bold" />
    </button>
  );
}
