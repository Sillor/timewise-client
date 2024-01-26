import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import HamburgerMenu from "../../assets/HamburgerIcon.jsx";
import AvatarIcon from "../../assets/AvatarIcon.jsx";
import { isLoggedIn as checkLoggedIn } from "../../utils/authHandler.js";
import Sidebar from "./Sidebar.jsx";
import AccountPopupMenu from "../account-popup-menu/AccountPopupMenu.jsx";

export default function Navbar() {  
  const menuIcon = useRef(null);
  const accountIcon = useRef(null);
  const isLoggedIn = checkLoggedIn();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openAccountMenu, setOpenAccountMenu] = useState(false);

  function toggleSidebar() {
    setOpenSidebar(!openSidebar);
  }

  function toggleAccountMenu() {
    setOpenAccountMenu(!openAccountMenu);
  }

  return (
    <nav className="z-10 fixed w-full top-0 left-0">
      <div className="bg-[#2a4f64] bg-fixed bg-perlin h-16 flex items-center text-light px-5 [&>*]:cursor-pointer">
        {isLoggedIn ? (
          <>
            <div
              onClick={() => {
                toggleSidebar();
                openAccountMenu && setOpenAccountMenu(false);
              }}
              tabIndex="1"
              onKeyDown={(event) =>
                event.key === "Enter" && event.currentTarget.click()
              }
              ref={menuIcon}
            >
              <HamburgerMenu className="h-8 w-8" />
            </div>
            <div className="text-xl lg:text-2xl font-bold flex flex-grow items-center ms-5">
              <Link
                tabIndex="0"
                to="/"
                onClick={() => {
                  // openAccountMenu && setOpenAccountMenu(false);
                  openSidebar && setOpenSidebar(false);
                }}
              >
                TimeWise
              </Link>
            </div>
            <div
              tabIndex="0"
              onClick={() => {
                openSidebar && setOpenSidebar(false);

                toggleAccountMenu();
              }}
              onKeyDown={(event) =>
                event.key === "Enter" && event.currentTarget.click()
              }
              ref={accountIcon}
            >
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
          <Sidebar
            open={openSidebar}
            handleToggle={setOpenSidebar}
            focusMenu={menuIcon}
          />
          <AccountPopupMenu
            open={openAccountMenu}
            handleToggle={setOpenAccountMenu}
            focusMenu={accountIcon}
          />
        </>
      )}
    </nav>
  );
}
