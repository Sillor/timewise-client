import React from 'react';
import './App.css';
import LandingNavBar from './timetracker/components/Landing-NavBar/landing-navbar.jsx';
import ResetPassword from './timetracker/layout/ResetPassword.jsx';
import Users from './timetracker/components/users-page/Users.jsx';

function App() {
  return (
    <>
      {/* <LandingNavBar />
      <ResetPassword /> */}
      <Users />
    </>
  );
}

export default App;
