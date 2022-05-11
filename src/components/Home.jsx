import React from "react";
import home from "../assets/home.png";
import style from "../components/style.css";
export default function Home() {
  return (
    <div className="home">
      {/* <video src="https://exploitus.chinmayakumarbiswal.in/image/back.mkv" muted loop autoplay type="mp4"></video> */}
      {/* <video loop autoPlay>
       <source src={require('https://exploitus.chinmayakumarbiswal.in/image/back.mkv')} type="video/mp4" />
      </video> */}
      <div className="container">
        <div className="content">
          <p className="sub-title"> Soon</p>
          <h1 className="title">An Ed-tech Metaverse like no other</h1>
          <p className="description">
            We want to put college inside prallel world to change the tradition education system and to provide them incredable platform 
            
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
