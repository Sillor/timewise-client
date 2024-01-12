import React from 'react'
import { Link } from 'react-router-dom'
import AccountPopupLink from './AccountPopupLink'

export default function AccountPopupMenu({isOpen, setIsOpen}) {

  function closePopup() {
    setIsOpen(false)
  }
  
  return (
    <div
      className={`bg-dark text-white text-xl
        fixed flex flex-col transition pt-5 z-10 right-0 box-border
        shadow-dark ${!isOpen ? "translate-x-[calc(100%+1px)]" : "shadow-lg"}`}
    >
      <div className='text-sm px-10 pb-5 text-zinc-300'>email@example.com</div>
      {/* <Link to="/account" className='flex items-center px-10 text-base py-2 cursor-pointer hover:bg-zinc-700 focus:bg-zinc-700'>Account Settings</Link> */}
      <AccountPopupLink to={"/account"} name="Account Settings" isSidebarOpen={isOpen} closeSidebarFunc={closePopup}/>
      <div className='flex items-center px-10 text-base py-2 cursor-pointer border-t-[1px] border-zinc-600 hover:bg-zinc-700 focus:bg-zinc-700'>Log out</div>
    </div>
  )
}
