import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import HamburgerMenu from "../../assets/HamburgerIcon.jsx";
import Sidebar from "./Sidebar.jsx";
import AvatarIcon from "../../assets/AvatarIcon.jsx";

export default function Navbar() {
  const sidebar = useRef(null);
  const isLoggedIn = true;
  const [openSidebar, setOpenSidebar] = useState(false);

  function toggleSidebar() {
    setOpenSidebar(!openSidebar);
  }

  return (
    <nav className="z-10 fixed w-full top-0 left-0">
      <div className="bg-[#2a4f64] bg-fixed bg-perlin h-16 flex items-center text-light px-5 [&>*]:cursor-pointer">
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
              <Link
                to="/"
                onClick={() => {
                  openSidebar && setOpenSidebar(false);
                }}
              >
                TimeWise
              </Link>
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
      {isLoggedIn && (
        <Sidebar
          focusElement={sidebar}
          open={openSidebar}
          handleToggle={setOpenSidebar}
        />
      )}
    </nav>
  );
}
