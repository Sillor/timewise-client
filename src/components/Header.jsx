import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="flex bg-dark bg-opacity-40 p-2 items-center shadow-lg">
      <h1 className="text-4xl me-2">🕑</h1>
      <h1 className="text-xl text-light font-bold">TimeWise</h1>
    </div>
  );
}

export default Header;
