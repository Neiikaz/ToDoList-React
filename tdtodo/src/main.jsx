import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquare, faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { faTasks, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faSquare, faCheckSquare, faTasks, faTrash);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
