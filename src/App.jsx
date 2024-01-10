import React from 'react';
import './App.css';
import LandingNavBar from './timetracker/components/Landing-NavBar/landing-navbar.jsx'
import LoginComponent from './login/LoginComponent.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white ">
      <LandingNavBar/>
      <LoginComponent/>
    </div>
  );
}

export default App;
