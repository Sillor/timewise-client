import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/form-components/FormInput";
import Button from "../../components/button-component/Button";
import PasswordResetForm from "../../components/password-reset-form/PasswordResetForm";
import "./CreateAccountPage.css";
import Greeting from "../../components/greeting/Greeting";

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
        emailError: "Invalid Email Format",
      }));
      return;
    } else {
      setInputData((prev) => ({ ...prev, emailValue: value, emailError: "" }));
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
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailValue, password: passwordValue }),
      });

      const data = await response.json();
      setServerResponse({ message: data.message, success: data.success });

      if (data.success) navigate("/tracker");
    } catch (error) {
      setServerResponse({
        message: `An error occurred: ${error.message}`,
        success: false,
      });
    }
  }

  return (
    <div className="flex items-center justify-center flex-col lg:flex-row lg:justify-evenly">
      <Greeting start="Welcome To " highlight="TimeWise" end="!"/>
      
      <div className=" flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center">
          <div className="text-secondary">Create</div> Account
        </h1>
        <form className="flex flex-col mt-8 gap-4">
          <FormInput
            type="email"
            placeholder="Email Address"
            error={inputData.emailError}
            onChange={handleEmailOnChange}
          />
          <PasswordResetForm
            inputData={inputData}
            setInputData={setInputData}
          />
          <Button
            className="mt-4 h-12 w-[242px] font-semibold"
            onClick={handleSubmit}
          >
            Create Account
          </Button>
          <div className="mt-4 h-5">
            {serverResponse && (
              <div
                className={`${
                  serverResponse.success ? "text-green-500" : "text-red-500"
                } text-center`}
              >
                {serverResponse.message}
              </div>
            )}
          </div>
        </form>
        <div className="text-center mt-4">
          <span>Already Have An Account?</span>
          <Link
            to="/login"
            className="ps-1 underline text-primary hover:text-cyan-300"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
