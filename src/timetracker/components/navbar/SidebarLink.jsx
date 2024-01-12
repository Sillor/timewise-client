import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarLink({to, name, icon, isSidebarOpen, closeSidebarFunc}) {
  return (
    <Link
      to={to}
      className={"flex items-center rounded-e-md pe-2 hover:bg-zinc-700 focus:bg-zinc-700"}
      tabIndex={isSidebarOpen ? 1 : -1}
      onClick={closeSidebarFunc}
    >
      {icon && <div className="inline-block w-6 h-6">{icon}</div>}
      <span className="ms-3 only:ms-9">{name}</span>
    </Link>
  );
}