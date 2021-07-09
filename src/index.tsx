import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainPage from "./modules/MainPage";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import englishTranslations from "./translations/en.json";

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider
      messages={englishTranslations}
      locale={"en"}
      defaultLocale={"en-gb"}
    >
      <MainPage />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
