import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserStyle } from "./styles/userStyle";
import { GlobalStyle } from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UserStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
