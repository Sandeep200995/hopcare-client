import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../../components/page/Header/header";
import SideBar from "../../../components/sideBar/sideBarScreen";

import drImage from "../../../images/dr.jpg";
import drOne from "../../../assets/dummy/doctor-1.jpg";
import drTwo from "../../../assets/dummy/doctor-2.jpg";
import drThree from "../../../assets/dummy/women-dr.webp";
import verified from "../../../assets/dummy/verified.png";
import digital from "../../../assets/dummy/digital.png";
import homeHeroImg from "../../../assets/dummy/homepage-hero.png";
import naini from "../../../assets/dummy/naini.jpeg";
import comboDr from "../../../assets/dummy/comofordoctor.jpeg";
import downloadApp from "../../../assets/dummy/download_app.jpeg";

import "./dashboardscreen.scss";
import * as CONSTANTS from "../../../constants/dummy";
import * as COMMON_ACTIONS from "../../../redux/actions/common";
import * as ClinicActions from "../../../redux/actions/clinic/index";
import * as CLINIC_ACTION_TYPES from "../../../redux/actions/clinic/types";
import * as DoctorActions from "../../../redux/actions/doctor/index";
import * as DOCTOR_ACTION_TYPES from "../../../redux/actions/doctor/types";
import { useDispatch, useSelector } from "react-redux";
import HowItWorks from "./howItWorks/howItWorks";
import Footer from "../../../components/footer/footer";
import Booking from "../../../components/card/booking";
import ModalConfirm from "../../../components/modal/modalConfirm";

function DashboardScreen() {
  const history: any = useNavigate();
  const dispatch: any = useDispatch();
  const clinicState = useSelector((state: any) => state.clinicData);
  const doctorState = useSelector((state: any) => state.doctorData);
  const [clinicList, setClinicList]: any = useState(CONSTANTS.DEFAULT_DUMMY_DATA.DASHBOARD_CLINIC_LIST);
  const [doctorList, setDoctorList]: any = useState(CONSTANTS.DEFAULT_DUMMY_DATA.DASHBOARD_DOCTORS_LIST);
  const [healthAdvice, setHealthAdvice]: any = useState(CONSTANTS.DEFAULT_DUMMY_DATA.DASHBOARD_HEALTH_LIST);
  const [specialities, setSpecialities]: any = useState(CONSTANTS.DEFAULT_DUMMY_DATA.DASHBOARD_SPECILITY_LIST);

  useEffect(() => {
    dispatch(COMMON_ACTIONS.startLoading({}));
    dispatch(ClinicActions.getAllClinics({ formData: { limit: 20, skip: 0 } }));
    dispatch(DoctorActions.getAllDoctors({ formData: { limit: 20, skip: 0 } }));
  }, []);

  useEffect(() => {
    switch (clinicState.case) {
      case CLINIC_ACTION_TYPES.GET_ALL_CLINICS_SUCCESS:
        setClinicList(clinicState.dashboardClinicData);
        dispatch(COMMON_ACTIONS.stopLoading({}));
        break;
      case CLINIC_ACTION_TYPES.GET_ALL_CLINICS_FAILURE:
        toast(clinicState.message);
        dispatch(COMMON_ACTIONS.stopLoading({}));
        break;
      default:
        break;
    }
  }, [clinicState]);

  useEffect(() => {
    // console.log("doctorState", doctorState.dashboardDoctorData);
    switch (doctorState.case) {
      case DOCTOR_ACTION_TYPES.GET_ALL_DOCTORS_SUCCESS:
        setDoctorList(doctorState.dashboardDoctorData);
        dispatch(COMMON_ACTIONS.stopLoading({}));
        break;
      case DOCTOR_ACTION_TYPES.GET_ALL_DOCTORS_FAILURE:
        dispatch(COMMON_ACTIONS.stopLoading({}));
        break;
      default:
        break;
    }
  }, [doctorState]);

  function renderClinics() {
    return (
      <>
        <div className="card-area">
          {clinicList.list.map((info: any, ind: number) => {
            const { _id, name, address } = info;
            return (
              <div key={`${ind}_${_id}`} className="card-profile">
                <div className="card-profile-inner">
                  <img src={drImage} alt="doctor" />
                  <div className="card-profile-text-box">
                    <p>{name ? name : " - "}</p>
                    <p>{`${address.buildingNo ? address.buildingNo + "," : ""}${address.buildingName ? address.buildingName + "," : ""
                      } ${address.addressLine1 ? address.addressLine1 + "," : ""}${address.addressLine2 ? address.addressLine2 + "," : ""
                      }`}</p>
                  </div>
                </div>
                <div className="view-details">
                  <button
                    // onClick={() => history('./profile')}
                    onClick={() => history('./appointment-confirm')}
                    className="btn-common lg">View Details</button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  function renderDoctors() {
    // console.log("doctorList", doctorList);
    return (
      <>
        <div className="card-area">
          {doctorList.list.map((info: any, ind: number) => {
            const { _id, firstName, lastName, address } = info;
            // console.log("info-->", info);
            return (
              <div key={`${ind}_${_id}`} className="card-profile">
                <div className="card-profile-inner">
                  <img src={drImage} alt="doctor" />
                  <div className="card-profile-text-box">
                    <p>{`${firstName ? firstName : " - "} ${lastName ? lastName : " - "}`}</p>
                  </div>
                </div>
                <div className="view-details">
                  <button className="btn-common lg">View Details</button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  function renderHealthAdvice() {
    return (
      <div className="health-advice-group">
        {healthAdvice.list.map((drList: any, ind: number) => {
          return (
            <div className="health-advice" key={`${ind}_`}>
              <div className="health-img">
                <img src={drList.img} alt="" />
              </div>
              <p>{drList.name}</p>
              <button className="btn-common">Consult Now</button>
            </div>
          )

        })}
      </div>
    )
  }

  function renderHowWework() {
    return <HowItWorks />;
  }

  function heroSection() {
    return (
      <div className="hero-area-box">
        <div>
          <div>
            <h1>Skip the travel!</h1>
            <h1>Take Online Doctor Consultation</h1>
            <p className="start-here">Private consultation + Audio call <span></span> Starts here at just ₹599</p>
          </div>
          <div className="doctor-hero">
            <img src={drOne} alt="doctor" />
            <img src={drTwo} alt="doctor" />
            <img src={drThree} alt="doctor" />
            <p>99+ Doctors are online <span className="online"></span></p>
          </div>
          <div>
            <button className="btn-grad">Consult Now</button>
          </div>
          <div className="icons-verify">
            <p>
              <img src={verified} alt="verified" />
              Verified Doctors
            </p>
            <p>
              <img src={digital} alt="digital" />
              Digital Prescription
            </p>
            <p>
              <i></i>
              Free followup
            </p>

          </div>
        </div>


        <div className="hero-img">
          <img src={homeHeroImg} alt="hero" />
        </div>

      </div>
    )
  }

  function renderSpecialist() {
    return (
      <div className="spec-outer-area">
        <div className="spec-area">
          {specialities.list.map((spList: any, spInd: number) => {
            return (
              <div className="spec-inner" key={`${spInd}`}>
                <div className="spec-img-group">
                  <figure>
                    <img src={spList.img} alt="specelist" />
                  </figure>
                  <h5>{spList.name}</h5>
                  <p>₹{spList.price}</p>
                </div>
                <div>
                  <button className="btn-common">Consult Now</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  function renderServiceArea() {
    return (
      <div className="service-details">
        <div className="service-box">
          <h4>Naini- Patient Medical Account</h4>
          <img src={naini} alt="naini" />
          <p>Naini is the name of patient personal medical account where patient can manage appointment for OPD Consultation in clinic/hospital. Patients can download our app for better experience</p>
          <button className="btn-common">Free Registration</button>
        </div>

        <div className="service-box">
          <h4>Como- Doctor|Clinic|Hospital</h4>
          <img src={comboDr} alt="doctor combo" />
          <p>Como is an online trustable software for doctors, clinics and hospitals. This digital tool help doctors, clinics and hospital to enhance online presence, manage online patients,consult and appointments.</p>
          <button className="btn-common">Free Listing</button>
        </div>

        <div className="service-box">
          <h4>Free Medical App</h4>
          <img src={downloadApp} alt="download our app" />
          <p>Best medical app for online consult in eOPD and online appointment for OPD in clinic. You can search doctor, clinic, hospital and services to book doctors.</p>
          <button className="btn-common">Download the App </button>
        </div>

      </div>
    )
  }


  return (
    <div className="App">
      <Header></Header>
      <div className="hero-area">
        {heroSection()}
      </div>
      {/* <ModalConfirm /> */}
      <div className="main-area">
        <h2>25+ Specialities</h2>
        {renderSpecialist()}
        <h2>Popular Clinics in this area</h2>
        {renderClinics()}
        {/* <Booking/> */}
        <h2>Popular Doctors in this area</h2>
        {renderDoctors()}
        <h2>Health Advice</h2>
        {renderHealthAdvice()}
      </div>
      <div className="service-main-area">
        <h2>Our Top Services for Patients and Medical Service Providers</h2>
        {renderServiceArea()}
      </div>

      <div className="main-area">
        <div className="section-one">{renderHowWework()}</div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default DashboardScreen;
