import React from 'react';
import './App.css';
import LandingNavBar from './timetracker/components/Landing-NavBar/landing-navbar.jsx';
import ResetPassword from './timetracker/layout/ResetPassword.jsx';
import LoginComponent from './timetracker/components/login/LoginComponent.jsx';

function App() {
  return (
    <>
     <LandingNavBar />
      <LoginComponent /> 
    </>
  );
}

export default App;
