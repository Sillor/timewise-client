import React from 'react';
import './App.css';
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';

function App() {
  return (
    <div className='app'>
      {/*className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">Hello TimeWise!</h1>*/}
      <ForgotPassword />
      <hr />
      <ResetPassword />
    </div>
  );
}

export default App;
