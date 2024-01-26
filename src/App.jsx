import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "./timetracker/components/navbar/Navbar.jsx";
import { authData, getEmail } from "./timetracker/utils/authHandler.js";
import "./App.css";

function App() {
  authData.navigate = useNavigate();
  [authData.email, authData.setEmail] = useState(getEmail())
  return (
    <>
      <Navbar />
      <div className="app-bg text-light bg-dark h-full mt-16 [&>*:first-child]:min-h-full [&>*:first-child]:min-w-min">
        <Outlet />
      </div>
    </>
  );
}

export default App;