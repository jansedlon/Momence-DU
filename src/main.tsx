import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme";
import { GlobalStyle } from "~/global-style";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
