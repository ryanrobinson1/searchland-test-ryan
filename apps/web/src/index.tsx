import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App/App";
import reportWebVitals from "./reportWebVitals";
import { PageWrapper } from "./shared/PageWrapper/PageWrapper";

ReactDOM.render(
  <React.StrictMode>
    <PageWrapper>
      <App />
    </PageWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
