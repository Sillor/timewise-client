import React from 'react';
import './Login.css'
import LogInWords from './LogInWords.jsx';
import SignIn from './SignIn.jsx';

function LoginComponent() {
  return (
    <div className='main'>
      <LogInWords/>
      <span className="divider"></span>
      <SignIn/>
    </div>
  );
}

export default LoginComponent;