import React, { useState } from "react";
import PropTypes from "prop-types";
import PasswordEye from "./PasswordEye";

export default function FormInput(props) {
  const isPassword = props.type === "password";
  const [isHidden, setIsHidden] = useState(true);

  function handleEyeClick() {
    setIsHidden((prev) => !prev);
  }

  const errorDiv = (
    <div className="form-input--error-popup absolute w-6 h-6 bg-red-500 -left-8 rounded-full flex items-center justify-center group">
      <span>!</span>
      <div className="form-input--error-message hidden absolute left-7 z-10 bg-red-500 rounded-md px-2 min-w-60 text-center group-hover:block group-active:block">
        {typeof props.error === "string"
          ? props.error
          : JSON.stringify(props.error)}
      </div>
    </div>
  );
  return (
    <div className="form-input flex items-center w-[242px] h-[34px] [&:not(:last-of-type)]:mb-[15px] bg-white rounded-md">
      {props.error && errorDiv}
      <input
        className={`w-full h-full text-dark rounded-l-md indent-[11px] outline-secondary outline-2 only:rounded-r-md focus-visible:outline`}
        type={
          (props.type &&
            (isPassword ? (isHidden ? "password" : "text") : props.type)) ||
          "text"
        }
        placeholder={props.placeholder ? props.placeholder : ""}
        onChange={props.onChange}
      />
      {isPassword && (
        <button
          type="button"
          className="text-primary flex items-center justify-center h-full w-[34px] ms-1 cursor-pointer outline-secondary outline-2 focus-visible:outline rounded-r-md bg-white"
          onClick={handleEyeClick}
        >
          <PasswordEye hidden={isHidden} className="w-4 h-5"/>
        </button>
      )}
    </div>
  );
}

FormInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};
