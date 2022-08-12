import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "mdb-ui-kit";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
