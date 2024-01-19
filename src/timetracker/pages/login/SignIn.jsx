import React, { useState } from 'react';
import FormInput from '../../components/form-components/FormInput';
import './Login.css';
import { login } from '../../utils/authHandler';

function SignIn() {
    const [loginData, setLoginData] = useState({
      email: "",
      password: "",
      error: ""
    })
    
    function handleEmailOnChange(event) {
      const val = event.currentTarget.value;
      setLoginData((prev) => ({ ...prev, email: val }));
    }
    function handlePasswordOnChange(event) {
      const val = event.currentTarget.value;
      setLoginData((prev) => ({ ...prev, password: val }));
    }
  
    async function handleSubmitOnClick() {
      const status = await login(loginData.email, loginData.password);
      setLoginData((prev) => ({ ...prev, error: status.message }));
    }
    return (
      <div className='text-center'>
        <h1 className='text-4xl mb-8 lg:text-6xl lg:mb-10'>Sign In</h1>
        <FormInput type="text" placeholder="Email address" onChange={handleEmailOnChange}/>
        <FormInput type="password" placeholder="Email address" onChange={handlePasswordOnChange}/>
        {loginData.error && <div className='text-red-300'>{loginData.error}</div>}
        <br></br>
        <h2> <a className='text-xs lg:text-xs text-sky-500 underline pl-28 lg:pl-28' href='_blank'> Forgot your password?</a></h2>
        <button className='bg-amber-500 rounded-md px-24 py-2.5 mt-5 mb-1.5' onClick={handleSubmitOnClick}>Sign In</button>
        <h2 className='mt-2.5'>New user? <a className='text-sky-500 underline' href='_blank'>Sign up</a></h2>
      </div>
    );
  }
  export default SignIn