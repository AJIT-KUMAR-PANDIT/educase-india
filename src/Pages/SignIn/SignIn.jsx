import React from "react";
import Input from "../../Components/Input/Input";
import StyleSignIn from "./SignIn.module.css";

const SignIn = () => {
  return (
    <>
      <div className={StyleSignIn.container}>
        <div className={StyleSignIn.innerContainer}>
          <div className={StyleSignIn.login}>
            Signin to your <br /> PopX account
          </div>
          <div>
          <div>
            {" "}
            <Input label={"Email Address"}  placeholder={"Enter Email Address"}/>
          </div>
          <div>
            {" "}
            <Input label={"Password"}placeholder={"Enter Password"} />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
