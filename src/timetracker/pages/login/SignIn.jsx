import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../../components/form-components/FormInput';
import { login } from '../../utils/authHandler';
import './Login.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  function handleEmailOnChange(event) {
    const val = event.currentTarget.value;
    setEmail(val)
  }
  function handlePasswordOnChange(event) {
    const val = event.currentTarget.value;
    setPassword(val)
  }

  async function handleSubmitOnClick() {
    const status = await login(email, password);
    if (!status.success) setErrorMessage(status.message)
  }



  return (
    <div className="text-center">
      <h1 className="text-4xl mb-8 lg:text-6xl lg:mb-10">Sign In</h1>
      <FormInput type="text" placeholder="Email address" onChange={handleEmailOnChange}/>
      <FormInput type="password" placeholder="Password" onChange={handlePasswordOnChange}/>
      <h2>
        <Link
          className="text-xs lg:text-xs text-sky-500 underline pl-28 lg:pl-28"
          to="/resetpassword"
        >
          Forgot your password?
        </Link>
      </h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button
        className="bg-amber-500 rounded-md px-24 py-2.5 mt-5 mb-1.5"
        onClick={handleSubmitOnClick}
      >
        Sign In
      </button>
      <h2 className="mt-2.5">
        New user?{' '}
        <Link className="text-sky-500 underline" to="/register">
          Sign Up
        </Link>
      </h2>
    </div>
  );
}

export default SignIn;
