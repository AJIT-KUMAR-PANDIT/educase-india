import React from "react";
import StyleHome from "./Home.module.css";
import Buttons from "../../Components/Buttons/Buttons";

const Home = () => {
  return (
    <>
      <div className={StyleHome.container}>
        <div className={StyleHome.innerContainer}>
          <div className={StyleHome.headingWelcome}>Welcome to PopX</div>
          <div className={StyleHome.subHeading}>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit,
          </div>
          <div>
            <Buttons buttonColor={"#6C25FF 0% 0% no-repeat padding-box"} textColor={"#FFFFFF"} text={"Create Account"}/>
          </div>
          <div>
            <Buttons buttonColor={"#6C25FF4B 0% 0% no-repeat padding-box"} textColor={"#1D2226"} text={"Already Registered? Login"}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
