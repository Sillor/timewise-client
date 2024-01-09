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
    <div className="form-input relative flex items-center w-[242px] h-[34px] [&:not(:last-of-type)]:mb-[15px]">
      {props.error && errorDiv}
      <input
        className={`${isPassword ? "pe-7" : "pe-3"} w-full h-full text-dark rounded-md indent-[11px] size-4 outline-secondary outline-2 focus-visible:outline`}
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
          className="text-primary absolute right-1 h-5 w-5 cursor-pointer outline-secondary outline-2 focus-visible:outline rounded-sm"
          onClick={handleEyeClick}
        >
          <PasswordEye hidden={isHidden} />
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
