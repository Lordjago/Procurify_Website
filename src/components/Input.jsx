import React from "react";
import "@assets/styles/Input.css";

const Input = ({ label, optional, ...props }) => {
  console.log(props)
  return (
    <div className="input-container">
      <div style={{ marginBottom: "-16px" }}>
        <input id={label} {...props} required />
        {label && (
          <label htmlFor="name">
            {label} {optional ? "(Optional)" : null}
          </label>
        )}
      </div>
    </div>
  );
};

export default Input;
