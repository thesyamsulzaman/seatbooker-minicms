import React from "react";

function Input({ error = false, ...restProps }) {
  return (
    <input
      {...restProps}
      className={`block w-full rounded py-1 px-2 border-solid border-2 border-gray-400 ${
        error && "border-red-500"
      }`}
    />
  );
}

export default Input;
