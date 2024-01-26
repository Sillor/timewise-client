import React from 'react';
import './Login.css'
import SignIn from './SignIn.jsx';
import Greeting from '../../components/greeting/Greeting.jsx';

function LoginComponent() {
  return (
    <div className='flex items-center justify-center flex-col lg:flex-row lg:justify-evenly'>
      <Greeting start="Welcome To " highlight="TimeWise" end="!"/>
      <SignIn/>
    </div>
  );
}

export default LoginComponent;