import { React, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProjectsIcon from '../../assets/ProjectsIcon.jsx';
import ClockIcon from '../../assets/ClockIcon.jsx';
import SidebarLink from './SidebarLink.jsx';
import UsersIcon from '../../assets/UsersIcon.jsx';

export default function Sidebar({ open, handleToggle, focusMenu }) {
  const sidebarElement = useRef(null);
  const links = [
    { to: '/tracker', name: 'Time Tracker', icon: <ClockIcon /> },
    { to: '/projects', name: 'Projects', icon: <ProjectsIcon /> },
    { to: '/users', name: 'Users', icon: <UsersIcon /> },
    { to: '/register', name: 'Register' },
    { to: '/login', name: 'Login' },
    { to: '/resetpassword', name: 'Reset Password' },
    { to: '/reset-password', name: 'Confirm password reset' },
    { to: '/pagenotfound', name: 'Page Not Found' },
  ].map((link, i) => (
    <SidebarLink
      key={i}
      to={link.to}
      name={link.name}
      icon={link.icon}
      open={open}
      handleToggle={handleToggle}
    />
  ));

  useEffect(() => {
    const handler = (event) => {
      // Close sidebar if the click target is not within the menu icon and is outside the sidebar
      if (
        !focusMenu.current.contains(event.target) &&
        !sidebarElement.current.contains(event.target)
      ) {
        handleToggle(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <menu
      className={`bg-dark text-white text-xl h-[calc(100vh-64px)] 
      fixed overflow-y-auto flex flex-col transition-all pt-3 z-10 
      shadow-dark border-r-[1px] border-gray-500 pb-10
      pe-10 [&>:not([aria-hidden])]:py-3 [&>:not([aria-hidden])]:ps-5 
      [&:has(>:focus)]:shadow-2xl
      ${open ? 'translate-x-0' : '-translate-x-full'}
      ease-in-out duration-200
      `}
      ref={sidebarElement}
    >
      <a aria-hidden tabIndex={-1}></a>
      {links}
    </menu>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  handleToggle: PropTypes.func,
  focusMenu: PropTypes.object,
};
