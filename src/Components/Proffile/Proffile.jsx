import React from 'react'
import StyleProffile from "./Proffile.module.css";
import userProffile from "../../assets/img/userProffile.png";
import camera from "../../assets/img/camera.png";

const Proffile = () => {
  return (
    <>
    <div>
    <img src={userProffile} alt="userProffile" className={StyleProffile.userProffile}/>
    <img src={camera} alt="camera" className={StyleProffile.camera}/>
    </div>
    </>
  )
}

export default Proffile;