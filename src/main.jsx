import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
