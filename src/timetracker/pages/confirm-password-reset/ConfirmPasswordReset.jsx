import React, { useState, useEffect } from 'react';
import './ConfirmPasswordReset.css';
import { Link, useLocation } from 'react-router-dom';
import FormInput from '../../components/form-components/FormInput.jsx';

function ConfirmPasswordReset() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState('');
  const [message, setMessage] = useState({ text: '', success: false });

  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get('token');

    setToken(token);
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPasswordValid()) {
      return;
    }

    fetch('http://localhost:5000/reset-confirm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, password: password }),
    })
      .then((res) => {
        if (res.status === 200)
          setMessage({ text: 'Password has been reset', success: true });
        else setMessage({ text: 'Password reset failed', success: false });
      })
      .catch((err) => {
        setMessage({ text: 'Password reset failed', success: false });
      });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isPasswordValid = () => {
    if (password.length < 12) {
      return false;
    }

    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharacter.test(password)) {
      return false;
    }
    const forbiddenStrings = ['password', '123', '1234', '12345', '123456'];
    if (
      forbiddenStrings.some((forbiddenString) =>
        password.includes(forbiddenString)
      )
    ) {
      return false;
    }
    return true;
  };

  const displayPasswordWarning = () => {
    if (password && !isPasswordValid()) {
      return (
        <div className="password-warning">
          <p className="password-req text-red-500 mb-3 leading-5">
            Password must be at least 12
            <br /> characters and must include a special
            <br /> character. Passwords cannot include
            <br /> any of the following strings:
            <br />
          </p>
          <ul className="list-disc list-inside mb-3 text-red-500 leading-5">
            <li>“password”</li>
            <li>“123”</li>
            <li>“1234”</li>
            <li>“12345”</li>
            <li>“123456”</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="app flex justify-center items-center h-screen md:pt-30">
      <h1 className="text-7xl text-shadow hidden md:block">
        Forgot your
        <br /> password?
      </h1>
      <hr className="border-l mx-40 h-80 hidden md:block" />
      <div>
        <h2 className="text-5xl mb-9 font-bold justify-center">
          Reset
          <br /> Password
        </h2>
        <form className="max-w-md w-full mx-auto" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="text-black mb-1">
              <FormInput
                type={showPassword ? 'text' : 'password'}
                placeholder="New Password"
                onChange={handlePasswordChange}
                error={displayPasswordWarning() ? 'Password is not valid' : ''}
              />
            </label>
          </div>
          <label className="text-black mb-1">
            <FormInput
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              error={displayPasswordWarning() ? 'Password is not valid' : ''}
            />
          </label>
          {displayPasswordWarning()}
          <button type="submit" className="submit-button w-45">
            Confirm
          </button>
          <p
            className={
              'text-center ' +
              (message.success ? 'text-green-500' : 'text-red-500')
            }
          >
            {message.text}
          </p>
          <div className="flex justify-center">
            <h5>New user? </h5>
            <Link to="/register" className="ml-1 text-blue-400 underline">
              {' '}
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConfirmPasswordReset;
