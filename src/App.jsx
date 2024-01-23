import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "./timetracker/components/navbar/Navbar.jsx";
import { history } from "./timetracker/utils/authHandler.js";
import "./App.css";

function App() {
  history.navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="app-bg text-light bg-dark h-full mt-16 [&>*:first-child]:min-h-full [&>*:first-child]:min-w-full">
        <Outlet />
      </div>
    </>
  );
}

export default App;
