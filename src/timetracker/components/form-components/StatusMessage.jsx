import React from "react";

export default function StatusMessage({ message, success, className }) {
  return (
    <>
      {message && (
        <p
          className={`${className} text-center ${
            success ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </>
  );
}
