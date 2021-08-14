import React from "react";

function Button({
  children,
  size,
  variant,
  rounded,
  block,
  classes,
  ...restProps
}) {
  const sizes = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-3 text-md",
    lg: "py-3 px-4 text-lg",
  };

  const variants = {
    primary: "bg-blue-700 text-white",
    success: "bg-green-500 text-white",
    dark: "bg-gray-900 text-white",
    danger: "bg-red-900 text-white",
    info: "bg-blue-900 text-white",
  };

  const isRounded = rounded && "rounded-full";
  const isBlock = block && "block w-full";

  return (
    <button
      {...restProps}
      className={`font-medium shadowed-md ${variants[variant]} ${
        sizes[size]
      } ${isRounded} ${isBlock} rounded ${classes && classes}`}
    >
      {children}
    </button>
  );
}

export default Button;
