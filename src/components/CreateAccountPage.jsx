import React from "react";
import "./CreateAccountPage.css";

export default function CreateAccountPage() {
  return (
    <div className="create-account min-h-screen bg-gray-900 text-white flex items-center justify-center flex-col lg:flex-row lg:justify-evenly">
      <div className="create-account--greeting-container">
        <div className="create-account--greeting text-3xl font-bold text-center">
          Welcome To <span className="text-secondary">TimeWise</span>!
        </div>
      </div>

      <div className="create-account--spacer hidden rounded w-[1px] h-[50vh] bg-purple-50 lg:block"></div>

      <div className="create-account--body-container">
        <h1 className="text-5xl font-bold text-center mt-14">
          <div className="text-secondary">Create</div> Account
        </h1>
        <form className="create-account--form flex flex-col mt-8">
          <div className="create-account--form-input">
            <input
              type="text"
              name="email"
              id="email-input"
              placeholder="Email Address"
            />
          </div>
          <div className="create-account--form-input">
            <input
              type="password"
              name="password"
              id="password-input"
              placeholder="Password"
            />
            <div></div>
          </div>
          <div className="create-account--form-input">
            <input
              type="password"
              name="confirm-password"
              id="confirm-password-input"
              placeholder="Confirm Password"
            />
          </div>
          <button
            className="bg-secondary create-account--form-button font-semibold"
            type="submit"
            action="api/register"
            method="post"
          >
            Create Account
          </button>
        </form>
        <div className="text-center mt-4">
          <span>Already Have An Account?</span>
          <a className="ps-1 underline text-primary" href="/login">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}
