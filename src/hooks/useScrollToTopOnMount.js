import { useEffect } from "react";

// Resets scroll position when a page mounts.
export default function useScrollToTopOnMount() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);
}
