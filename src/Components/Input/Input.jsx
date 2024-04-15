import React from "react";
import StyleInput from "./Input.module.css";

const Input = ({label, placeholder, required, type}) => {
  return (
    <>
      <div className={StyleInput.container}>
        <label className={StyleInput.label}>{label}{
          <span className={required? StyleInput.requiredClass : StyleInput.hide}>*</span>
        }</label>
        <input type={type} className={StyleInput.input} placeholder={" "+placeholder} />
      </div>
    </>
  );
};

export default Input;
