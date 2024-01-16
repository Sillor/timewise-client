import React, { useState } from 'react';
import './ConfirmPasswordReset.css';
import PasswordEye from '../../components/form-components/PasswordEye.jsx';
import { Link } from 'react-router-dom';

function ConfirmPasswordReset() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const isPasswordValid = () => {
        if (password.length < 12) {
            return false;
        }

        const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
        if (!specialCharacter.test(password)) {
            return false;
        }
        const forbiddenStrings = ["password", "123", "1234", "12345", "123456"];
        if (forbiddenStrings.some(forbiddenString => password.includes(forbiddenString))) {
            return false;
        }
        return true;
    };

    const displayPasswordWarning = () => {
        if (password && !isPasswordValid()) {
            return (
                <div className="password-warning">
                    <p className="password-req text-red-500 mb-3 leading-5">
                        Password must be at least 12<br /> characters and must include a special<br /> character.
                        Passwords cannot include<br /> any of the following strings:<br />
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
            <h1 className="text-7xl text-shadow hidden md:block">Forgot your<br /> password?</h1>
            <hr className="border-l mx-40 h-80 hidden md:block" />
            <div>
                <h2 className="text-5xl mb-9 font-bold justify-center">Reset<br /> Password</h2>
                <form className="max-w-md w-full mx-auto">
                    <div className="relative">
                        <label className="text-black mb-1">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="New Password"
                                className="password-input p-2 w-full h-9 shadow-lg"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <PasswordEye hidden={!showPassword} onClick={togglePasswordVisibility} className="password-icon" />
                        </label>
                    </div>
                    <label className="text-black mb-1">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="password-input p-2 w-full h-9 shadow-lg"
                        />
                    </label>
                    {displayPasswordWarning()}
                    <button type="submit" className="submit-button w-45">Confirm</button>
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