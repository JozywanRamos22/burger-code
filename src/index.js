import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/globalStyles";
import Routes from "./routes";
const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <>
    <Routes />
    <GlobalStyle />
  </>,
);
