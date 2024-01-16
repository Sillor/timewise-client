import React, { useState } from 'react';
import './Login.css';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-container">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="password-input"
      />
      <span className="toggle-btn" onClick={togglePasswordVisibility}>
        {showPassword ? '👀' : '👁️'}
      </span>
    </div>
  );
};

export default PasswordInput;
