import React from "react";
import StyleButtons from "./Buttons.module.css";

const Buttons = ({buttonColor, textColor, text}) => {
  return (
    <>
      <div>
        <button className={StyleButtons.button} style={{background: buttonColor}}>
          <span className={StyleButtons.buttonText} style={{color: textColor}}>{text}</span>
        </button>
      </div>
    </>
  );
};

export default Buttons;
