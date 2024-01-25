import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "./timetracker/components/navbar/Navbar.jsx";
import "./App.css";

function App() {
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
