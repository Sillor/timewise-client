import React from 'react';
import './Login.css'
import LogInWords from './loginwords.jsx';
import SignIn from './SignIn.jsx';

function LoginComponent() {
  return (
    <div className='lg:flex lg:flex-row lg:justify-evenly lg:items-center lg:pb-0 flex flex-col justify-center items-center pb-40'>
      <LogInWords/>
      <span className="lg:h-96 lg:w-px lg:bg-white"></span>
      <SignIn/>
    </div>
  );
}

export default LoginComponent;