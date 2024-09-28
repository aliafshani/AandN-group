import React from "react";

const Button = ({ children, style, dir }) => {
  return (
    <a to={`${dir}`} className={`${style}`}>
      {children}
    </a>
  );
};

export default Button;
