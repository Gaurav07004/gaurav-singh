import { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-8 right-8
        w-11 h-11
        grid place-items-center
        rounded-lg
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
