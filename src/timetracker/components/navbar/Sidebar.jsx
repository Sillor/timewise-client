import React, { useRef } from "react";
import PropTypes from "prop-types";

import ProjectsIcon from "../../assets/ProjectsIcon.jsx";
import ClockIcon from "../../assets/ClockIcon.jsx";
import SidebarLink from "./SidebarLink.jsx";
import UsersIcon from "../../assets/UsersIcon.jsx";

export default function Sidebar({ focusElement, setBlurredAt }) {
  const sidebarElement = useRef(null);
  const links = [
    { to: "/tracker", name: "Time Tracker", icon: <ClockIcon /> },
    { to: "/projects", name: "Projects", icon: <ProjectsIcon /> },
    { to: "/users", name: "Users", icon: <UsersIcon /> },
    { to: "/users", name: "Timesheet" },
    { to: "/register", name: "Register" },
    { to: "/login", name: "Login" },
    { to: "/resetpassword", name: "Reset Password" },
    { to: "/confirmresetpassword", name: "Confirm password reset" },
    { to: "/pagenotfound", name: "Page Not Found"},
    
  ].map((link, i) => (
    <SidebarLink key={i} to={link.to} name={link.name} icon={link.icon} />
  ));
  function handleOnBlur() {
    setBlurredAt(Date.now());
  }
  return (
    <div
      onBlur={handleOnBlur}
      ref={sidebarElement}
      className={`nav--sidebar bg-dark text-white text-xl h-[calc(100vh-64px)]
        fixed overflow-y-auto flex flex-col transition pt-3 z-10
        shadow-dark border-r-[1px] border-gray-500 pe-10
        [&>:not([aria-hidden])]:py-3 [&>:not([aria-hidden])]:ps-5 
        [&:has(>:focus)]:shadow-2xl [&:not(:has(>:focus))]:-translate-x-full
        `}
    >
      <a aria-hidden ref={focusElement} tabIndex={-1}></a>
      {links}
    </div>
  );
}

Sidebar.propTypes = {
  focusElement: PropTypes.object,
  isOpen: PropTypes.object,
  setBlurredAt: PropTypes.func,
};
