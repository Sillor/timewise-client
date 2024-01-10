import React from 'react';
import './App.css';
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';

function App() {
  return (
    <div className="app flex justify-center items-center h-screen">
      {/*className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Hello TimeWise!</h1>*/}
      <ForgotPassword />
      <hr className="border-l mx-40 h-80" />
      <ResetPassword />
    </div>
  );
}

export default App;
