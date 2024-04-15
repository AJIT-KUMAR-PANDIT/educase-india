import React from "react";
import Input from "../../Components/Input/Input";
import StyleSignIn from "./SignIn.module.css";
import Buttons from "../../Components/Buttons/Buttons";

const SignIn = () => {
  return (
    <>
      <div className={StyleSignIn.container}>
        <div>
          <div className={StyleSignIn.login}>
            &nbsp;&nbsp;Signin to your <br />
            &nbsp;&nbsp;PopX account
          </div>
          <br />
          <div>
            <div>
              {" "}
              <Input
                label={"Email Address"}
                placeholder={"Enter Email Address"}
                type={"email"}
              />
            </div>
            <div>
              {" "}
              <Input
                label={"Password"}
                placeholder={"Enter Password"}
                type={"password"}
              />
            </div>
            <div className={StyleSignIn.buttons}>
              {" "}
              <a href="/settings">
                <Buttons
                  buttonColor={"#CBCBCB 0% 0% no-repeat padding-box"}
                  textColor={"#FFFFFF"}
                  text={"Login"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
