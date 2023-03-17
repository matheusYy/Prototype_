import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./interface/header.interface/header";
import { Main } from "./interface/main.article/main";
// styles
import "./sass/index.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>
);
