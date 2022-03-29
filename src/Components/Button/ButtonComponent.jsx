import React from "react";
import './buttoncomponent.styles.scss'

const buttonTypeClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};

function Button({ children, buttonType, ...otherProps }) {
  return (
    <div
      className={`button-container ${buttonTypeClasses[buttonType]}`}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default Button;
