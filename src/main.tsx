import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/theme.css";
import "./styles/layout.css";
import "./styles/cards.css";
import "./styles/dashboard.css";
import "./styles/communities.css";
import "./styles/table.css";
import "./styles/community-details.css";
import "./styles/marketing.css";
import "./styles/leads.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);