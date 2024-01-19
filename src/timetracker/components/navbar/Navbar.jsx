import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import HamburgerMenu from "../../assets/HamburgerIcon.jsx";
import Sidebar from "./Sidebar.jsx";
import AvatarIcon from "../../assets/AvatarIcon.jsx";
import { isLoggedIn as checkLoggedIn } from "../../utils/apiHandler.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = checkLoggedIn();

  function toggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  return (
    <nav className="relative">
      <div className="bg-[#000B1B] bg-opacity-40 h-16 flex items-center text-light px-5 [&>*]:cursor-pointer">
        {isLoggedIn ? (
          <>
            <div
              onClick={toggleSidebar}
              tabIndex="1"
              onKeyDown={(event) =>
                event.key === "Enter" && event.currentTarget.click()
              }
            >
              <HamburgerMenu className="h-8 w-8" />
            </div>
            <div className="text-xl lg:text-2xl font-bold flex flex-grow items-center ms-5">
              <Link to="/">TimeWise</Link>
            </div>
            <div className="text-primary">
              <Link to="/account">
                <AvatarIcon className="w-9 h-9" />
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link to="/" className="flex items-center">
              <img src={Logo} className="h-8 w-8 inline"></img>
              <span className="text-xl lg:text-2xl font-bold ms-5">
                TimeWise
              </span>
            </Link>
          </>
        )}
      </div>
      {isLoggedIn && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
}
