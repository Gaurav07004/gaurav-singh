import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.replaceState(null, "", "/");
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
