import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./timetracker/components/navbar/Navbar.jsx";
import ConfirmPasswordReset from "./timetracker/pages/confirm-password-reset/ConfirmPasswordReset.jsx";
import "./timetracker/pages/confirm-password-reset.css"
import "./App.css";

function App() {
  return (
    <>
      <ConfirmPasswordReset />
    </>
  );
}

export default App;

