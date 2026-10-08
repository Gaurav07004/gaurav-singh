import { useEffect } from "react";

// Locks page scrolling while `locked` is true (e.g. mobile menu open).
export default function useBodyScrollLock(locked) {
  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "auto";
  }, [locked]);
}
