import React from "react";
import StyleInput from "./Input.module.css";

const Input = ({label, placeholder}) => {
  return (
    <>
      <div className={StyleInput.container}>
        <label for="email" className={StyleInput.label}>&nbsp;&nbsp;&nbsp;{label}&nbsp;&nbsp;&nbsp;</label>
        <input type="text" className={StyleInput.input} placeholder={placeholder} />
      </div>
    </>
  );
};

export default Input;
