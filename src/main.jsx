import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CreateAccountPage from "./timewise/components/create-account-page/CreateAccountPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <CreateAccountPage />
  </React.StrictMode>
);
