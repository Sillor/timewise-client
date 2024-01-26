import React from 'react'
import { Link } from 'react-router-dom'

export default function AccountPopupLink({to, name, isSidebarOpen, closeSidebarFunc}) {
  return (
    // <Link to={to} className='flex items-center px-10 text-base py-2 cursor-pointer hover:bg-zinc-700 focus:bg-zinc-700'>Account Settings</Link>
    <Link
      to={to}
      className={"flex items-center px-10 text-base py-2 cursor-pointer hover:bg-zinc-700 focus:bg-zinc-700"}
      tabIndex={isSidebarOpen ? 0 : -1}
      onClick={closeSidebarFunc}
    >
      {name}
    </Link>
  )
}
