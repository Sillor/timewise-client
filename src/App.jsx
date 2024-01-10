import React from 'react';
import './App.css';
import LandingNavBar from './timetracker/components/Landing-NavBar/landing-navbar.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white ">
      <LandingNavBar/>
      <h1 className="text-4xl font-bold flex items-center justify-center">Hello TimeWise!</h1>
    </div>
  )
}

export default App;
