import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FluentProvider theme={teamsLightTheme}>
    <App />
  </FluentProvider>
);
