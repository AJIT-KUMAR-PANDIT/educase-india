import React from "react";
import StyleSettings from "./Settings.module.css";
import Proffile from "../../Components/Proffile/Proffile";


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
                <Proffile/>
            </div>
            <div>
                <span className={StyleSettings.userName}>Marry Doe</span>
                <br/>
                <span className={StyleSettings.userEmail}>Marry@Gmail.Com</span>
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
