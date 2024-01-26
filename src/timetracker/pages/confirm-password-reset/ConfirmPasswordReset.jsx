import { useState, useEffect } from "react";
import "./ConfirmPasswordReset.css";
import { Link, useLocation } from "react-router-dom";
import PasswordResetForm from "../../components/password-reset-form/PasswordResetForm.jsx";
import Button from "../../components/button-component/Button.jsx";
import Greeting from "../../components/greeting/Greeting.jsx";
import StatusMessage from "../../components/form-components/StatusMessage"
import { confirmPasswordReset } from "../../utils/authHandler.js";

function ConfirmPasswordReset() {
  const [inputData, setInputData] = useState({
    passwordValue: null,
    passwordError: null,
    confirmPasswordValue: null,
    confirmPasswordError: null,
  });
  const [token, setToken] = useState('');
  const [serverResponse, setServerResponse] = useState({ message: '', success: false });

  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const token = query.get('token');

    setToken(token);
  }, [location]);

  async function handleFormOnSubmit(event) {
    event.preventDefault();
    if (
      inputData.passwordError ||
      inputData.confirmPasswordError ||
      !inputData.passwordValue ||
      !inputData.confirmPasswordValue
    ) {
      setServerResponse({success: false, message: "Invalid Fields"});
      return
    }

    const status = await confirmPasswordReset(token, inputData.passwordValue)
    setServerResponse(status)
    
  }

  return (
    <div className="flex items-center justify-center flex-col lg:flex-row lg:justify-evenly lg:pt-30">
      <Greeting start="Forgot Your " highlight="Password" end="?" />
      <div>
        <h2 className="text-5xl mb-9 font-bold justify-center text-center">
          Reset
          <br /> Password
        </h2>
        <form className="flex flex-col gap-4 max-w-md w-full mx-auto" onSubmit={handleFormOnSubmit}>
          <PasswordResetForm
            inputData={inputData}
            setInputData={setInputData}
          />
          <Button type="submit" className="w-45 h-12 mt-4">
            Confirm
          </Button>
          <StatusMessage message={serverResponse.message} success={serverResponse.success}/>
          <div className="flex justify-center">
            <h5>New user? </h5>
            <Link to="/register" className="ml-1 text-primary underline">
              {" "}
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConfirmPasswordReset;
