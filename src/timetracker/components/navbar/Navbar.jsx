import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import HamburgerMenu from "../../assets/HamburgerIcon.jsx";
import AvatarIcon from "../../assets/AvatarIcon.jsx";
import Sidebar from "./Sidebar.jsx";
import AccountPopupMenu from "../account-popup-menu/AccountPopupMenu.jsx";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(true);

  const isLoggedIn = true;

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  function toggleAccountMenu() {
    setIsAccountMenuOpen((prev) => !prev);
  }

  function clickOnEnterPress(event) {
    if (event.key === "Enter") event.currentTarget.click();
  }

  return (
    <nav className="relative">
      <div className="bg-[#000B1B] bg-opacity-40 h-16 flex items-center text-light px-5 [&>*]:cursor-pointer">
        {isLoggedIn ? (
          <>
            <div
              onClick={toggleSidebar}
              tabIndex="1"
              onKeyDown={clickOnEnterPress}
            >
              <HamburgerMenu className="h-8 w-8" />
            </div>
            <div className="text-xl lg:text-2xl font-bold flex flex-grow items-center ms-5">
              <Link to="/" tabIndex="2">TimeWise</Link>
            </div>
            <div onClick={toggleAccountMenu} tabIndex="2" onKeyDown={clickOnEnterPress}>
              <AvatarIcon className="w-9 h-9 text-primary" />
              {/* <Link to="/account">
              </Link> */}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center">
              <img src={Logo} className="h-8 w-8 inline"></img>
              <span className="text-xl lg:text-2xl font-bold ms-5">
                TimeWise
              </span>
            </div>
          </>
        )}
      </div>
      {isLoggedIn && (
        <>
          <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          <AccountPopupMenu
            isOpen={isAccountMenuOpen}
            setIsOpen={setIsAccountMenuOpen}
          />
        </>
      )}
    </nav>
  );
}
