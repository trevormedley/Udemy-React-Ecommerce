import React from "react";
import "./forminput.styles.scss";

function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      {" "}
      <input className="form-input" {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? `shrink` : null
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
