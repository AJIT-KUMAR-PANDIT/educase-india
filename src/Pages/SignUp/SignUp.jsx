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
          &nbsp;&nbsp;Create your <br/>&nbsp;&nbsp;PopX account
          </div>
          <div>
          <div>
            {" "}
            <Input label={"Full Name"}  placeholder={"Enter Full Name"} required={true}/>
          </div>
          <div>
            {" "}
            <Input label={"Phone number"}placeholder={"Enter Phone number"} required={true}/>
          </div>
          <div>
            {" "}
            <Input label={"Email address"}placeholder={"Enter Email address"} required={true}/>
          </div>
          <div>
            {" "}
            <Input label={"Password"}placeholder={"Enter Password"} required={true}/>
          </div>
          <div>
            {" "}
            <Input label={"Company name"}placeholder={"Enter Company name"} />
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
