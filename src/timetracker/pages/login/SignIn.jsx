import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PasswordInput from './Password';
import { login } from '../../utils/authHandler';
import Button from "../../components/button-component/Button";
import FormInput from "../../components/form-components/FormInput";
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
      <h1 className="text-5xl mb-8 font-bold">Sign In</h1>
      <div className="flex flex-col gap-4">
        <FormInput type="email" placeholder="Email address" value={email} onChange={handleEmailOnChange}/>
        <FormInput type="password" placeholder="Password" value={password} onChange={handlePasswordOnChange}/>
      </div>
      <h2>
        <Link
          className="text-xs lg:text-xs text-primary underline pl-28 lg:pl-28"
          to="/resetpassword"
        >
          Forgot your password?
        </Link>
      </h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <Button className="w-full py-2.5 mt-5 mb-1.5 font-bold" onClick={handleSignIn}>
        Sign In
      </Button>
      <h2 className="mt-2.5">
        New user?{" "}
        <Link className="text-primary underline" to="/register">
          Sign Up
        </Link>
      </h2>
    </div>
  );
}

export default SignIn;
