import React, { useState } from "react";
import "./App.css";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import ProjectsIcon from "./timetracker/icons/ProjectsIcon.jsx";
import ClockIcon from "./timetracker/icons/ClockIcon.jsx";


function App() {
  // remove
  function PlaceholderNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const isLoggedIn = true;

    function toggleSidebar() {
      setIsOpen((prev) => !prev);
    }

    const links = [
      ["/",  "Home"],
      ["/projects", "Projects", <ProjectsIcon/>],
      ["/tracker", "Tracker", <ClockIcon/>],
    ].map((a, i) => (
      <Link
        to={a[0]}
        key={i}
        onClick={() => {
          setIsOpen(false);
        }}
      >
       <div className="h-4 inline-block">{a[2]}</div> {a[1]}
      </Link>
    ));

    const sidebar = (
      <div
        className={`nav--sidebar bg-dark text-white   text-xl w-56 h-[calc(100vh-80px)] fixed overflow-y-auto flex flex-col [&>*]:py-3 [&>*]:ps-12 ${
          !isOpen ? "-translate-x-full" : ""
        } transition shadow-2xl shadow-dark`}
      >
        <div
          className="w-full text-center text-3xl cursor-pointer"
          onClick={toggleSidebar}
        >
          
        </div>
        {links}
      </div>
    );

    return (
      <nav className="relative">
        <div className="nav--header h-20 text-3xl flex justify-between [&>*]:px-4 [&>*]:cursor-pointer items-center">
          {isLoggedIn ? (
            <>
              <div onClick={toggleSidebar}>☰</div>
              <Link to="/account">👤</Link>
            </>
          ) : (
            <div>🕑TimeWise</div>
          )}
        </div>
        {isLoggedIn && sidebar}
      </nav>
    );
  }

  return (
    <>
      {/* Placeholder navbar, replace with real navbar */}
      <PlaceholderNavbar />
      {/* Placeholder navbar, replace with real navbar */}

      <div className="bg-dark text-light h-full">
        <Outlet />
      </div>
    </>
  );
}

export default App;

