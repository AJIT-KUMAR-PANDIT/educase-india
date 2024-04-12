import React from "react";
import StyleHome from "./Home.module.css";

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
            <button className={StyleHome.createAccountButton}>
              <span className={StyleHome.createAccountText}>
                Create Account
              </span>
            </button>
          </div>
          <div>
            <button className={StyleHome.loginButton}>
              <span className={StyleHome.loginText}>
                Already Registered? Login
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
