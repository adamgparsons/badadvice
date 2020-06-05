import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/Inter-Black.ttf";
import "./fonts/Inter-Bold.ttf";
import "./fonts/Inter-Regular.ttf";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
