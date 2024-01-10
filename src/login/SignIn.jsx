import React from 'react';
function SignIn() {
    return (
      <div className='signIn'>
        <h1 className='signIn-title'>Sign In</h1>
        <input className='inputBox' type='email' placeholder='Email address'/>
        <br></br>
        <input className='inputBox' type='password' placeholder='Password'/>
        <h2 className='signIn-questions'> <a id='forgot-password' className='link' href='_blank'> Forgot your password?</a></h2>
        <button className='btn-signIn'>Sign In</button>
        <h2 className='signIn-questions'>New user? <a className='link' href='_blank'>Sign up</a></h2>
      </div>
    );
  }
  export default SignIn