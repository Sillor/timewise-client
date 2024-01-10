import React, { useState } from 'react';
import './index.css';

function ResetPassword() {

    return (
        <div>
            <h2 className="text-5xl mb-9">Reset<br /> Password</h2>
            <form>
                <label>
                    <input
                        type="text"
                        placeholder="New Password"
                        className="password-input"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        placeholder="Confirm Password"
                        className="password-input"
                    />
                </label>
                {/*
                <p className="password-req">
                    Password must be at least 12 characters and must include a special character.
                    Passwords cannot include any of the following strings:
                    “password”
                    “123”
                    “1234”
                    “12345”
                    “123456”
                </p>
            */}
                <button type="submit" className="submit-button mt-4">Confirm</button>
                <h5>New user?</h5>
                <a href="./SignUp">Sign Up</a>
            </form>
        </div>
    );
}


export default ResetPassword;