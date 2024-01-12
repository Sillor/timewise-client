import React from 'react'

export default function AccountPopupMenu() {
  
  return (
    <div
      className={`bg-dark text-white text-xl h-[calc(100vh-64px)]
        fixed flex flex-col transition pt-5 z-10 right-0
        shadow-dark`}
    >
      <div className='text-sm px-10 pb-5 text-zinc-300'>email@example.com</div>
      <div className='flex items-center px-10 text-base py-1 hover:bg-zinc-700 focus:bg-zinc-700'>Account Settings</div>
      <div className='flex items-center px-10 text-base py-1 hover:bg-zinc-700 focus:bg-zinc-700'>LogOut</div>
    </div>
  )
}
