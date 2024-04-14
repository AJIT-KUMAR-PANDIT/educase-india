import React from "react";
import StyleInput from "./Input.module.css";

const Input = ({label, placeholder, required}) => {
  return (
    <>
      <div className={StyleInput.container}>
        <label for="email" className={StyleInput.label}>&nbsp;&nbsp;&nbsp;{label}{
          <span className={required? StyleInput.requiredClass : StyleInput.hide}>*</span>
        }&nbsp;&nbsp;&nbsp;</label>
        <input type="text" className={StyleInput.input} placeholder={placeholder} />
      </div>
    </>
  );
};

export default Input;
