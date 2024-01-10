import React, { useState } from "react";
import "./App.css";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function App() {
  // remove
  function PlaceholderNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const isLoggedIn = true;

    function toggleSidebar() {
      setIsOpen((prev) => !prev);
    }

    const links = [
      ["/", "Home"],
      ["/login", "Login"],
      ["/register", "Sign Up"],
      ["/tracker", "Tracker"],
    ].map((a, i) => (
      <Link
        to={a[0]}
        key={i}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {a[1]}
      </Link>
    ));

    const sidebar = (
      <div
        className={`nav--sidebar fixed bg-orange-500 top-0 w-28 h-full flex flex-col [&>*]:py-1 ${
          !isOpen ? "-translate-x-full" : ""
        } transition shadow-2xl shadow-dark`}
      >
        <div
          className="w-full text-center text-3xl cursor-pointer"
          onClick={toggleSidebar}
        >
          ☰
        </div>
        {links}
      </div>
    );

    return (
      <nav className="relative">
        <div className="nav--header h-10 flex justify-between [&>*]:px-4 [&>*]:cursor-pointer items-center">
          {isLoggedIn ? (
            <>
              <div onClick={toggleSidebar}>☰</div>
              <Link to="/account">👤</Link>
            </>
          ) : (
            <div>🕑TimeWise</div>
          )}
        </div>
        {isLoggedIn && sidebar}
      </nav>
    );
  }

  return (
    <>
      {/* Placeholder navbar, replace with real navbar */}
      <PlaceholderNavbar />
      {/* Placeholder navbar, replace with real navbar */}

      <div className="bg-dark text-light h-full">
        <Outlet />
      </div>
    </>
  );
}

export default App;
