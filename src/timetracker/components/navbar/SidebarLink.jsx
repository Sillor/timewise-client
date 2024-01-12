import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarLink({path, name, icon}) {
  return (
    <div className="h-6">
    <Link to={path}>
      <div className="inline-black h-6">{icon}</div>{name}
    </Link>
    </div>
  )
}