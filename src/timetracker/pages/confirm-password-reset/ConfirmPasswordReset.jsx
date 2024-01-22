import { useState } from 'react';
import './ConfirmPasswordReset.css';
import { Link } from 'react-router-dom';
import PasswordResetForm from '../../components/password-reset-form/PasswordResetForm.jsx';

function ConfirmPasswordReset() {
    const [inputData, setInputData] = useState({
        passwordValue: null,
        passwordError: null,
        confirmPasswordValue: null,
        confirmPasswordError: null,
      });

    return (
        <div className="app flex justify-center items-center md:pt-30">
            <h1 className="text-7xl greeting-text-shadow hidden md:block">Forgot your<br /> password?</h1>
            <hr className="border-l mx-40 h-80 hidden md:block" />
            <div>
                <h2 className="text-5xl mb-9 font-bold justify-center">Reset<br /> Password</h2>
                <form className="max-w-md w-full mx-auto">
                        <PasswordResetForm inputData={inputData} setInputData={setInputData}/>
                    <button
                        type="submit"
                        className="submit-button w-45"
                    >
                        Confirm
                    </button>
                    <div className="flex justify-center">
                        <h5>New user? </h5>
                        <Link to="/register" className="ml-1 text-blue-400 underline"> Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ConfirmPasswordReset;