import React from "react";
import StyleSettings from "./Settings.module.css";
import userProffile from "../../assets/img/userProffile.png";

const Settings = () => {
  return (
    <>
      <div className={StyleSettings.container}>
        <div>
          <div className={StyleSettings.headings}>Account Settings</div>
        </div>
        <br/>
        <div className={StyleSettings.proffile}>
            <div>
                <img src={userProffile} alt="userProffile" className={StyleSettings.userProffile}/>
            </div>
            <div>
                <span className={StyleSettings.userName}>John Doe</span>
                <br/>
                <span className={StyleSettings.userEmail}>jLXjF@example.com</span>
            </div>
        </div>
        <br/>
        <div className={StyleSettings.about}>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</div>
        <br/>
        <div className={StyleSettings.dashLine}>

        </div>
      </div>
    </>
  );
};

export default Settings;
