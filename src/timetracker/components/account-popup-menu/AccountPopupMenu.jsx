import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import AccountPopupLink from './AccountPopupLink'

export default function AccountPopupMenu({open, handleToggle, focusMenu}) {

  const menuElement = useRef(null)

  useEffect(() => {
    const handler = (event) => {
      // Close sidebar if the click target is not within the menu icon and is outside the sidebar
      if (!focusMenu.current.contains(event.target) && !menuElement.current.contains(event.target)) {
        handleToggle(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  });
  
  return (
    <div
      className={`bg-dark text-white text-xl
        fixed flex flex-col transition pt-5 z-10 right-0 box-border
        shadow-dark ${!open ? "translate-x-[calc(100%+1px)]" : "shadow-lg"}`}
        ref={menuElement}
    >
      <div className='text-sm px-10 pb-5 text-zinc-300'>email@example.com</div>
      {/* <Link to="/account" className='flex items-center px-10 text-base py-2 cursor-pointer hover:bg-zinc-700 focus:bg-zinc-700'>Account Settings</Link> */}
      <AccountPopupLink
        to={"/account"}
        name="Account Settings"
        isSidebarOpen={open}
        closeSidebarFunc={() => handleToggle(false)}
      />
      <div
        className="flex items-center px-10 text-base py-2 cursor-pointer border-t-[1px] border-zinc-600 hover:bg-zinc-700 focus:bg-zinc-700"
        tabIndex={open ? 0 : -1}
        onClick={() => handleToggle(false)}
        onKeyDown={(event) =>
          event.key === "Enter" && event.currentTarget.click()
        }
      >
        Log out
      </div>
    </div>
  )
}
