import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProjectsIcon from "../../assets/ProjectsIcon.jsx";
import ClockIcon from "../../assets/ClockIcon.jsx";
import SidebarLink from "./SidebarLink.jsx";
import UsersIcon from "../../assets/UsersIcon.jsx";

export default function Sidebar({ isOpen, setIsOpen }) {
  const links = [
    { to: "/tracker", name: "Time Tracker", icon: <ClockIcon /> },
    { to: "/projects", name: "Projects", icon: <ProjectsIcon /> },
    { to: "/users", name: "Users", icon: <UsersIcon /> },
    { to: "/timesheet", name: "Timesheet" },
    { to: "/register", name: "Register" },
    { to: "/login", name: "Login" },
    { to: "/resetpassword", name: "Reset Password" },
  ].map((link, i) => (
    <SidebarLink
      key={i}
      to={link.to}
      name={link.name}
      icon={link.icon}
      isSidebarOpen={isOpen}
      closeSidebarFunc={() => setIsOpen(false)}
    />
  ));

  return (
    <div
      className={`nav--sidebar bg-dark text-white text-xl h-[calc(100vh-64px)]
        fixed overflow-y-auto flex flex-col transition pt-3  
        shadow-dark border-r-[1px] border-gray-500 pe-10
        [&>*]:py-3 [&>*]:ps-5
        ${!isOpen ? "-translate-x-full" : "shadow-2xl"}`}
    >
      {links}
    </div>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
