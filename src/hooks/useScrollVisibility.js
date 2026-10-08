import { useEffect, useState } from "react";

// true once the page is scrolled past `offset` pixels.
export default function useScrollVisibility(offset = 300) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > offset);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return visible;
}
