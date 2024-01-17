import React from 'react';
import './Login.css'
import LogInWords from './loginwords.jsx';
import SignIn from './SignIn.jsx';

function LoginComponent() {
  return (
    <div className='flex justify-evenly items-center'>
      <LogInWords/>
      <span className="h-96 w-px bg-white"></span>
      <SignIn/>
    </div>
  );
}

export default LoginComponent;