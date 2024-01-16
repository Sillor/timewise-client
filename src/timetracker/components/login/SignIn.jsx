import React from 'react';
import PasswordInput from './Password';
function SignIn() {
    return (
      <div className='signIn'>
        <h1 className='signIn-title'>Sign In</h1>
        <input className='inputBox' type='email' placeholder='Email address'/>
        <br></br>
        <PasswordInput />
        <h2 className='signIn-questions'> <a id='forgot-password' className='link1' href='_blank'> Forgot your password?</a></h2>
        <button className='btn-signIn'>Sign In</button>
        <h2 className='signIn-questions'>New user? <a className='link2' href='_blank'>Sign up</a></h2>
      </div>
    );
  }
  export default SignIn