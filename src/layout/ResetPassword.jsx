import React from 'react';
import './ResetPassword.css';
import Header from '../components/Header.jsx';

function ResetPassword() {
  return (
    <div>
      <Header />
      <div className="flex justify-center pt-24 md:pt-48">
        <div>
          <h1 className="max-w-[262px] md:max-w-[512px] text-[3em] font-bold text-light mb-8">
            Reset Your Password
          </h1>
          <div className="max-w-[262px] flex-col m-auto">
            <p className="text-light font-normal mb-8">
              Enter the email address associated with your account and a link
              will be sent to reset your password.
            </p>
            <input
              type="text"
              placeholder="Email address"
              className="w-full h-[34px] mb-4 rounded-md px-2"
            />
            <button className="bg-secondary text-light w-full h-[48px] mb-4 rounded-md">
              Submit
            </button>
            <p className="text-light text-[0.85em] text-center">
              Don't have an account?{' '}
              <a href="./SingUp" className="text-primary underline">
                Sing up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
