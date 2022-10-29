import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/page/Header/header";
import SideBar from "../../../components/sideBar/sideBarScreen";
import drImage from "../../../images/dr.jpg";
import "./dashboardscreen.scss";

function DashboardScreen() {
  const history: any = useNavigate();
  return (
    <div className="App">
      <Header></Header>
      <SideBar/>
      <div className="main-area">
       <h2>Dashboard area</h2>

       <div className="card-area">
        <div className="card-profile">
            <img src={drImage } alt="doctor" />
            <div className="card-profile-inner">
              <p>Name</p>
              <p>place</p>
              <p>Contact number</p>
            </div>
        </div>
        <div className="card-profile">
            <img src={drImage } alt="doctor" />
            <div className="card-profile-inner">
              <p>Name</p>
              <p>place</p>
              <p>Contact number</p>
            </div>
        </div>
        <div className="card-profile">
            <img src={drImage } alt="doctor" />
            <div className="card-profile-inner">
              <p>Name</p>
              <p>place</p>
              <p>Contact number</p>
            </div>
        </div>
        <div className="card-profile">
            <img src={drImage } alt="doctor" />
            <div className="card-profile-inner">
              <p>Name</p>
              <p>place</p>
              <p>Contact number</p>
            </div>
        </div>
        <div className="card-profile">
            <img src={drImage } alt="doctor" />
            <div className="card-profile-inner">
              <p>Name</p>
              <p>place</p>
              <p>Contact number</p>
            </div>
        </div>
        <div className="card-profile">
            <img src={drImage } alt="doctor" />
            <div className="card-profile-inner">
              <p>Name</p>
              <p>place</p>
              <p>Contact number</p>
            </div>
        </div>
        <div className="card-profile">
            <img src={drImage } alt="doctor" />
            <div className="card-profile-inner">
              <p>Name</p>
              <p>place</p>
              <p>Contact number</p>
            </div>
        </div>
       </div>

        <button
          onClick={() => {
            history(`/login`);
          }}
        >
          Hello
        </button>
      </div>

    </div>
  );
}

export default DashboardScreen;
