import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../utils/authHandler';
import Button from "../../components/button-component/Button";
import FormInput from "../../components/form-components/FormInput";
import StatusMessage from '../../components/form-components/StatusMessage';
import './Login.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false)
  const [serverResponse, setServerResponse] = useState({success: false, message: ""});
  
  function handleEmailOnChange(event) {
    setEmail(event.currentTarget.value)
    setHasError(event.error)
  }
  function handlePasswordOnChange(event) {
    setPassword(event.currentTarget.value)
    setHasError(event.error)
  }

  async function handleSubmitOnClick(event) {
    if (hasError) {
      setServerResponse({success: false, message: "Invalid Field"})
      return
    }
    const status = await login(email, password);
    setServerResponse(status)
  }

  return (
    <div className="text-center">
      <h1 className="text-5xl mb-8 font-bold">Sign In</h1>
      <div className="flex flex-col gap-4">
        <FormInput type="email" placeholder="Email address" value={email} onChange={handleEmailOnChange} validate/>
        <FormInput type="password" placeholder="Password" value={password} onChange={handlePasswordOnChange}/>
      </div>
      <h2>
        <Link
          className="text-xs lg:text-xs text-primary underline pl-28 lg:pl-28"
          to="/request-password-reset"
        >
          Forgot your password?
        </Link>
      </h2>
      <Button className="w-full py-2.5 mt-5 mb-1.5 font-bold" onClick={handleSubmitOnClick}>
        Sign In
      </Button>
      <StatusMessage message={serverResponse.message} success={serverResponse.success} className="max-w-[242px]"/>
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
