import React from 'react';
import PasswordInput from './Password';
import './Login.css';

function SignIn() {
    return (
      <div className='text-center'>
        <h1 className='text-6xl mb-10'>Sign In</h1>
        <input className='rounded-md pr-12 pl-3 py-1 text-black mb-2.5' type='email' placeholder='Email address'/>
        <br></br>
        <PasswordInput />
        <h2 className='text-xs'> <a className='text-sky-500 underline pl-28' href='_blank'> Forgot your password?</a></h2>
        <button className='bg-amber-500 rounded-md px-24 py-2.5 mt-5 mb-1.5'>Sign In</button>
        <h2 className='mt-2.5'>New user? <a className='text-sky-500 underline' href='_blank'>Sign up</a></h2>
      </div>
    );
  }
  export default SignIn