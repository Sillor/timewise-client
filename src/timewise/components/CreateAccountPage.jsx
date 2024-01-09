import React, { useState } from "react";
import FormInput from "./FormInput";
import "./CreateAccountPage.css";

export default function CreateAccountPage() {
  const [inputData, setInputData] = useState({
    emailValue: null,
    emailError: null,
    passwordValue: null,
    passwordError: null,
    confirmPasswordValue: null,
    confirmPasswordError: null,
  });

  function handleEmailOnChange(event) {
    const value = event.target.value;
    const isValidEmail = /.+@.+\..+/.test(value);
    if (!isValidEmail) {
      setInputData((prev) => ({
        ...prev,
        emailValue: value,
        emailError: "Invalid Email Format",
      }));
      return;
    } else {
      setInputData((prev) => ({ ...prev, emailValue: value, emailError: "" }));
    }
  }

  function handlePasswordOnChange(event) {
    const value = event.target.value;
    const checkedPassword = checkValidPassword(value);

    setInputData((prev) => ({
      ...prev,
      passwordValue: value,
      passwordError: checkedPassword.error ? checkedPassword.message : "",
    }));
  }

  function handleConfirmPasswordOnChange(event) {
    const value = event.target.value;
    const passwordsMatch = inputData.passwordValue === value;
    setInputData((prev) => ({
      ...prev,
      confirmPasswordValue: value,
      confirmPasswordError: !passwordsMatch ? "Passwords Do Not Match" : "",
    }));
  }

  function checkValidPassword(password) {
    const lowerCase = password.toLowerCase();
    const validString = /^(?!.*(?:password|123|1234|12345|123456)).*$/.test(
      lowerCase
    );
    // eslint-disable-next-line no-useless-escape
    const containsSpecial = /^(?=.*[\/!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).*$/.test(
      lowerCase
    );
    if (!validString) {
      return {
        error: true,
        message:
          "Password must not contain 'password', '123', '1234', '12345', or '123456'",
      };
    } else if (lowerCase.length < 12) {
      return {
        error: true,
        message: "Password must be at least 12 characters long",
      };
    } else if (!containsSpecial) {
      return {
        error: true,
        message: "Password must contain a special character",
      };
    }
    return { error: false, message: "" };
  }

  return (
    <div className="create-account min-h-screen bg-gray-900 text-white flex items-center justify-center flex-col lg:flex-row lg:justify-evenly">
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
          >
            Create Account
          </button>
        </form>
        <div className="text-center mt-4">
          <span>Already Have An Account?</span>
          <a className="ps-1 underline text-primary hover:text-cyan-300" href="/login">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
