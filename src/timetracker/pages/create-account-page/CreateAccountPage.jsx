import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/form-components/FormInput';
import checkValidPassword from '../../utils/checkValidPassword';
import './CreateAccountPage.css';

export default function CreateAccountPage() {
  const [inputData, setInputData] = useState({
    emailValue: null,
    emailError: null,
    passwordValue: null,
    passwordError: null,
    confirmPasswordValue: null,
    confirmPasswordError: null,
  });
  const navigate = useNavigate();
  const [serverResponse, setServerResponse] = useState(null);

  function handleEmailOnChange(event) {
    const value = event.target.value;
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
    if (!isValidEmail) {
      setInputData((prev) => ({
        ...prev,
        emailValue: value,
        emailError: 'Invalid Email Format',
      }));
      return;
    } else {
      setInputData((prev) => ({ ...prev, emailValue: value, emailError: '' }));
    }
  }

  function handlePasswordOnChange(event) {
    const value = event.target.value;
    const checkedPassword = checkValidPassword(value);

    setInputData((prev) => ({
      ...prev,
      passwordValue: value,
      passwordError: checkedPassword.error ? checkedPassword.message : '',
      confirmPasswordError:
        prev.confirmPasswordValue !== value ? 'Passwords Do Not Match' : '',
    }));
  }

  function handleConfirmPasswordOnChange(event) {
    const value = event.target.value;
    const passwordsMatch = inputData.passwordValue === value;
    setInputData((prev) => ({
      ...prev,
      confirmPasswordValue: value,
      confirmPasswordError: !passwordsMatch ? 'Passwords Do Not Match' : '',
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const {
      emailError,
      passwordError,
      confirmPasswordError,
      emailValue,
      passwordValue,
      confirmPasswordValue,
    } = inputData;

    if (
      emailError ||
      passwordError ||
      confirmPasswordError ||
      !emailValue ||
      !passwordValue ||
      !confirmPasswordValue
    )
      return;

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailValue, password: passwordValue }),
      });

      const data = await response.json();
      setServerResponse({ message: data.message, success: data.success });

      if (data.success) {
        sessionStorage.setItem("timewise_jwt_token",data.token)
        navigate('/tracker');
      }
    } catch (error) {
      setServerResponse({
        message: `An error occurred: ${error.message}`,
        success: false,
      });
    }
  }

  return (
    <div className="create-account min-h-full min-w-full flex items-center justify-center flex-col lg:flex-row lg:justify-evenly">
      <div className="create-account--greeting-container">
        <div className="create-account--greeting text-3xl font-bold lg:text-6xl">
          <span className="lg:block">Welcome To </span>
          <span className="text-secondary">TimeWise</span>!
        </div>
      </div>

      <div className="create-account--spacer hidden rounded w-[1px] h-[50vh] bg-purple-50 lg:block"></div>

      <div className="create-account--body-container flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center mt-14">
          <div className="text-secondary">Create</div> Account
        </h1>
        <form className="create-account--form flex flex-col mt-8">
          <FormInput
            type="text"
            placeholder="Email Address"
            error={inputData.emailError}
            onChange={handleEmailOnChange}
          />

          <FormInput
            type="password"
            placeholder="Password"
            error={inputData.passwordError}
            onChange={handlePasswordOnChange}
          />

          <FormInput
            type="password"
            placeholder="Confirm Password"
            error={inputData.confirmPasswordError}
            onChange={handleConfirmPasswordOnChange}
          />

          <button
            className="bg-secondary create-account--form-button font-semibold hover:bg-amber-500"
            type="submit"
            action="api/register"
            method="post"
            onClick={handleSubmit}
          >
            Create Account
          </button>
          <div className="mt-4 h-5">
            {serverResponse && (
              <div
                className={`${
                  serverResponse.success ? 'text-green-500' : 'text-red-500'
                } text-center`}
              >
                {serverResponse.message}
              </div>
            )}
          </div>
        </form>
        <div className="text-center mt-4">
          <span>Already Have An Account?</span>
          <a
            className="ps-1 underline text-primary hover:text-cyan-300"
            href="/login"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
