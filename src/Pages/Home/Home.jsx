import React from "react";
import StyleHome from "./Home.module.css";
import Buttons from "../../Components/Buttons/Buttons";

const Home = () => {
  return (
    <>
      <div className={StyleHome.container}>
        <div className={StyleHome.innerContainer}>
          <div className={StyleHome.headingWelcome}>&nbsp;Welcome to PopX</div>
          <div className={StyleHome.subHeading}>
            &nbsp;&nbsp;Lorem ipsum dolor sit amet,
            <br />
            &nbsp;&nbsp;consectetur adipiscing elit,
          </div>
          <div>
            <a href="/signup">
              <Buttons
                buttonColor={"#6C25FF 0% 0% no-repeat padding-box"}
                textColor={"#FFFFFF"}
                text={"Create Account"}
              />
            </a>
          </div>
          <div>
            <a href="/login">
              <Buttons
                buttonColor={"#6C25FF4B 0% 0% no-repeat padding-box"}
                textColor={"#1D2226"}
                text={"Already Registered? Login"}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
