import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "../../components/button-component/Button"
import FormInput from '../../components/form-components/FormInput';
import { resetPassword } from '../../utils/authHandler';
import './ResetPassword.css';
import StatusMessage from '../../components/form-components/StatusMessage';

function ResetPassword() {
  const [serverResponse, setServerResponse] = useState({success: false, message: ""})

  async function handleFormOnSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const result = await resetPassword(data);
    setServerResponse(result)
  }

  return (
    <div className="flex justify-center pt-24 md:pt-48">
      <div>
        <h1 className="max-w-[262px] md:max-w-[512px] text-[3em] font-bold text-light mb-8">
          Reset Your Password
        </h1>
        <form className="max-w-[262px] flex-col m-auto" onSubmit={handleFormOnSubmit}>
          <p className="text-light font-normal mb-8">
            Enter the email address associated with your account and a link will
            be sent to reset your password.
          </p>
          <label className="text-black" htmlFor='email'>
            <FormInput type="email" placeholder="Email address" name="email" pattern="^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" required className="!w-full mb-4"/>
          </label>
          <Button type="submit" className="w-full h-12 my-4">Submit</Button>
          <StatusMessage message={serverResponse.message} success={serverResponse.success}/>
          <p className="text-light text-[0.85em] text-center">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-primary underline active:text-blue-500"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
