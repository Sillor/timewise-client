import React, { useState } from "react";
import PropTypes from "prop-types";
import PasswordEye from "./PasswordEye";
import checkValidPassword from "../../utils/checkValidPassword";

export default function FormInput(props) {
  const { type, error, className, onChange, placeholder, validate, ...others } =
    props;
  const [inputError, setInputError] = useState(null);
  const [isHidden, setIsHidden] = useState(true);
  const isPassword = props.type === "password";
  const visibleError = error || inputError

  function handleEyeClick() {
    setIsHidden((prev) => !prev);
  }

  function validateEmail(value) {
    const errorMessage = "Invalid Email Format"
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);
    setInputError(!isValidEmail ? errorMessage : "");
    if (!isValidEmail) return errorMessage
    return ""

  }

  function validatePassword(value) {
    const checkedPassword = checkValidPassword(value);
    const errorMessage = checkedPassword.message
    setInputError(checkedPassword.error ? errorMessage : "");
    if (checkedPassword.error) return errorMessage
    return ""
  }

  function inputOnChange(event) {
    const value = event.currentTarget.value;
    if (type === "password") {
      event.error = validatePassword(value);
    } else if (type === "email" && validate) {
      event.error = validateEmail(value);
    }
    if (onChange) onChange(event);
  }

  const errorDiv = (
    <div className="form-input--error-popup absolute w-6 h-6 bg-red-500 -left-8 rounded-full flex items-center justify-center group">
      <span>!</span>
      <div className="form-input--error-message hidden absolute left-7 z-10 bg-red-500 rounded-md px-2 min-w-60 text-center group-hover:block group-active:block">
        {typeof visibleError === "string"
          ? visibleError
          : JSON.stringify(visibleError)}
      </div>
    </div>
  );
  return (
    <div
      className={`form-input relative flex items-center w-[242px] h-[34px] bg-white rounded-md ${className}`}
    >
      {visibleError && errorDiv}
      <input
        className={`w-full h-full text-dark rounded-l-md indent-[11px] outline-secondary outline-2 ${
          !isPassword ? "rounded-r-md" : ""
        } focus-visible:outline`}
        type={
          (type && (isPassword ? (isHidden ? "password" : "text") : type)) ||
          "text"
        }
        placeholder={placeholder ? placeholder : ""}
        onChange={inputOnChange}
        {...others}
      />
      {isPassword && (
        <button
          type="button"
          className="text-primary flex items-center justify-center h-full w-[34px] ms-1 cursor-pointer outline-secondary outline-2 focus-visible:outline rounded-r-md bg-white"
          onClick={handleEyeClick}
        >
          <PasswordEye hidden={isHidden} className="w-4 h-5" />
        </button>
      )}
    </div>
  );
}

FormInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};
