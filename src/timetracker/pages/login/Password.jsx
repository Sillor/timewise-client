import React, { useState } from 'react';
import './Login.css';

const PasswordInput = ({ password, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex relative z-10">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="flex-1 rounded-md pl-3 py-1 text-black mb-2 lg:mb-2.5"
      />
      <span
        className="absolute right-3 translate-y-1/4"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? '👀' : '👁️'}
      </span>
    </div>
  );
};

export default PasswordInput;
