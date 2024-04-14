import React from "react";
import Input from "../../Components/Input/Input";
import StyleSignUp from "./SignUp.module.css";
import Buttons from "../../Components/Buttons/Buttons";

const SignUp = () => {
  return (
    <>
      <div className={StyleSignUp.container}>
        <div className={StyleSignUp.innerContainer}>
          <div className={StyleSignUp.popxText}>
            &nbsp;&nbsp;Create your <br />
            &nbsp;&nbsp;PopX account
          </div>
          <br />
          <div>
            <div>
              {" "}
              <Input
                label={"Full Name"}
                placeholder={"Enter Full Name"}
                required={true}
              />
            </div>
            <div>
              {" "}
              <Input
                label={"Phone number"}
                placeholder={"Enter Phone number"}
                required={true}
              />
            </div>
            <div>
              {" "}
              <Input
                label={"Email address"}
                placeholder={"Enter Email address"}
                required={true}
              />
            </div>
            <div>
              {" "}
              <Input
                label={"Password"}
                placeholder={"Enter Password"}
                required={true}
              />
            </div>
            <div>
              {" "}
              <Input
                label={"Company name"}
                placeholder={"Enter Company name"}
              />
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;
              <span className={StyleSignUp.agencyText}>
                Are you an Agency?<span className={StyleSignUp.required}>*</span>
                <br />
                &nbsp;&nbsp; <input type="radio" />
                <label>Yes</label>
                &nbsp;&nbsp;&nbsp;
                <input type="radio" />
                <label>No</label>
              </span>
            </div>
            <div className={StyleSignUp.buttons}>
              {" "}
              <br /><br /><br />
              <Buttons
                buttonColor={"#6C25FF 0% 0% no-repeat padding-box"}
                textColor={"#FFFFFF"}
                text={"Create Account"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
