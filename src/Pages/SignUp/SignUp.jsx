import React from "react";
import Input from "../../Components/Input/Input";
import StyleSignUp from "./SignUp.module.css";
import Buttons from "../../Components/Buttons/Buttons";

const SignUp = () => {
  return (
    <>
      <div className={StyleSignUp.container}>
        <div className={StyleSignUp.innerContainer}>
          <div className={StyleSignUp.login}>
          Create your <br/> PopX account
          </div>
          <div>
          <div>
            {" "}
            <Input label={"Full Name*"}  placeholder={"Enter Email Address"}/>
          </div>
          <div>
            {" "}
            <Input label={"Phone number*"}placeholder={"Enter Password"} />
          </div>
          <div>
            {" "}
            <Input label={"Email address*"}placeholder={"Enter Password"} />
          </div>
          <div>
            {" "}
            <Input label={"Password *"}placeholder={"Enter Password"} />
          </div>
          <div>
            {" "}
            <Input label={"Company name"}placeholder={"Enter Password"} />
          </div>
          <div className={StyleSignUp.buttons}>
          {" "}
            <Buttons buttonColor={"#CBCBCB 0% 0% no-repeat padding-box"} textColor={"#FFFFFF"} text={"Login"}/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
