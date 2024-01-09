import React from "react";
import PropTypes from "prop-types";
import "./FormInput.css";

export default function FormInput(props) {
  
  const errorDiv = (
    <div className="form-input--error-popup absolute w-6 h-6 bg-red-500 -left-8 rounded-full flex items-center justify-center group">
      <span>!</span>
      <div className="form-input--error-message hidden absolute left-7 z-10 bg-red-500 rounded-md px-2 min-w-60 text-center group-hover:block group-active:block">
        {typeof props.error === "string" ? props.error : JSON.stringify(props.error)}
      </div>
    </div>
  );
  return (
    <div className="form-input relative flex items-center">
      {props.error && errorDiv}
      <input
        type={props.type || "text"}
        name="password"
        id="password-input"
        placeholder={props.placeholder ? props.placeholder : ""}
        onChange={props.onChange}
      />
      <div></div>
    </div>
  );
}

FormInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};
