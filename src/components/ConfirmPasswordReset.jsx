import React, { useState } from 'react';
import './ConfirmPasswordReset.css';

function ConfirmPasswordReset() {
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
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

    return (
        <div className="app flex justify-center items-center h-screen">
            <h1 className="text-7xl">Forgot your<br /> password?</h1>
            <hr className="border-l mx-40 h-80" />
            <div>
                <h2 className="text-5xl mb-9">Reset<br /> Password</h2>
                <form>
                    <label className="text-black">
                        <input
                            type="password"
                            placeholder="New Password"
                            className="password-input p-2 w-full h-9"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </label>
                    <label className="text-black mb-3">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="password-input p-2 w-full h-9"
                        />
                    </label>
                    {isPasswordValid() ? null : (
                        <p className="password-req text-red-500 mb-3">
                            Password must be at least 12<br /> characters and must include a special<br /> character.
                            Passwords cannot include<br /> any of the following strings:<br />
                            <ul className="list-disc list-inside">
                                <li>“password”</li>
                                <li>“123”</li>
                                <li>“1234”</li>
                                <li>“12345”</li>
                                <li>“123456”</li>
                            </ul>
                        </p>
                    )}
                    <button type="submit" className="submit-button w-45">Confirm</button>
                    <div className="flex justify-center">
                        <h5>New user?</h5>
                        <a href="./SignUp" className="ml-1 text-blue-500 underline"> Sign Up</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ConfirmPasswordReset;