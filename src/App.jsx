import React, { useState } from "react";
import "./App.css";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import ProjectsIcon from "./timetracker/assets/ProjectsIcon.jsx";
import ClockIcon from "./timetracker/assets/ClockIcon.jsx";
import HamburgerMenu from "./timetracker/assets/HamburgerIcon.jsx";

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
      ["/timesheet", "Timesheet"],
      ["/register", "Register"],
      ["/login", "Login"],
      ["/resetpassword", "Reset Password"],
      ["/projects", "Projects", <ProjectsIcon/>],
      ["/users", "Users"],
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
        className={`nav--sidebar bg-dark text-white text-xl w-56 h-[calc(100vh-80px)] fixed overflow-y-auto flex flex-col [&>*]:py-3 [&>*]:ps-12 ${
          !isOpen ? "-translate-x-full" : ""
        } transition shadow-2xl shadow-dark border-r-[1px] border-gray-500`}
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
        <div className="nav--header bg-dark bg-opacity-45 h-20 text-3xl flex [&>*]:px-4 [&>*]:cursor-pointer items-center">
          {isLoggedIn ? (
            <>
              <div onClick={toggleSidebar} className="h-10 w-[75px] flex items-center justify-center"><HamburgerMenu /></div>
              <div className="TimeWiseHeader lg:text-2xl font-bold flex-grow flex items-center">TimeWise</div>
              <div className="h-3/5 w-[75px] flex items-center justify-center">
                <Link to="/account">👤</Link>
              </div>
            </>
          ) : (
            <div>🕑 TimeWise</div>
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

      <div className="AppBkg bg-dark text-light h-full [&>*:first-child]:min-h-full [&>*:first-child]:min-w-full">
        <Outlet />
      </div>
    </>
  );
}

export default App;

