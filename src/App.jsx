import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav className="relative">
        <div className="nav--header flex [&>div]:px-4 [&>div]:cursor-pointer">
          <div>Ham</div>
          <div>one</div>
          <div>two</div>
        </div>
        <div className="nav--sidebar fixed bg-orange-500 h-full w-40 -translate-x-full">test</div>
      </nav>
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Hello TimeWise!</h1>
      </div>
    </>
  );
}

export default App;
