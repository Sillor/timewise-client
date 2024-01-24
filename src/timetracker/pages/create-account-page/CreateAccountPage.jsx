import { useState } from 'react';
import { register } from '../../utils/authHandler';
import FormInput from '../../components/form-components/FormInput';
import PasswordResetForm from '../../components/password-reset-form/PasswordResetForm';
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

  async function handleSubmit(event) {
    event.preventDefault();
    const {
      emailError,
      emailValue,
      passwordError,
      confirmPasswordError,
      passwordValue,
      confirmPasswordValue,
    } = inputData;

    if (
      passwordError ||
      confirmPasswordError ||
      emailError ||
      !emailValue ||
      !passwordValue ||
      !confirmPasswordValue
    ) {
      setServerResponse({ success: false, message: "Invalid Fields" });
      return;
    }
    const data = await register(emailValue, passwordValue)
    if (!data.success) setServerResponse({success: data.success ,message: data.message})
  }

  return (
    <div className="create-account min-h-full min-w-full flex items-center justify-center flex-col lg:flex-row lg:justify-evenly">
      <div className="create-account--greeting-container">
        <div className="greeting-text-shadow text-3xl font-bold lg:text-6xl text-center">
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
          <PasswordResetForm inputData={inputData} setInputData={setInputData}/>
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
