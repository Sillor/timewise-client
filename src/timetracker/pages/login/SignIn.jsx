import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordInput from './Password';
import './Login.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      navigate('/tracker');
    } else {
      setErrorMessage(data.message);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl mb-8 lg:text-6xl lg:mb-10">Sign In</h1>
      <input
        className="text-black rounded-md pr-12 pl-3 py-1 mb-3 lg:rounded-md lg:pr-12 lg:pl-3 lg:py-1 lg:mb-2.5"
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <PasswordInput password={password} setPassword={setPassword} />
      <h2>
        <a
          className="text-xs lg:text-xs text-sky-500 underline pl-28 lg:pl-28"
          href="_blank"
        >
          Forgot your password?
        </a>
      </h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button
        className="bg-amber-500 rounded-md px-24 py-2.5 mt-5 mb-1.5"
        onClick={handleSignIn}
      >
        Sign In
      </button>
      <h2 className="mt-2.5">
        New user?{' '}
        <a className="text-sky-500 underline" href="_blank">
          Sign up
        </a>
      </h2>
    </div>
  );
}

export default SignIn;
