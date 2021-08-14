import React from "react";

import Input from "../../../components/Input";

const InputField = ({
  input,
  label,
  meta: { touched, error: errorMessage },
  ...restProps
}) => (
  <div className="my-2">
    <label htmlFor="" className="block mb-1">
      {label}
    </label>
    <Input
      {...input}
      error={touched && errorMessage}
      autoComplete="off"
      {...restProps}
    />

    {touched && errorMessage && (
      <span className="mt-2 text-red-900 text-sm font-bold">
        {errorMessage}
      </span>
    )}
  </div>
);

export default InputField;
