import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/page/Header/header";
import SideBar from "../../../components/sideBar/sideBarScreen";
import drImage from "../../../images/dr.jpg";
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

function DashboardScreen() {
  const history: any = useNavigate();
  const dispatch: any = useDispatch();
  const clinicState = useSelector((state: any) => state.clinicData);
  const doctorState = useSelector((state: any) => state.doctorData);
  const [clinicList, setClinicList]: any = useState(CONSTANTS.DEFAULT_DUMMY_DATA.DASHBOARD_CLINIC_LIST);
  const [doctorList, setDoctorList]: any = useState(CONSTANTS.DEFAULT_DUMMY_DATA.DASHBOARD_DOCTORS_LIST);

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
        // toggleToast({
        //   ...toast,
        //   msg: clinicState.message,
        //   status: !toast.status,
        //   type: "error"
        // });
        dispatch(COMMON_ACTIONS.stopLoading({}));
        break;
      default:
        break;
    }
  }, [clinicState]);

  useEffect(() => {
    console.log("doctorState", doctorState.dashboardDoctorData);
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
                <img src={drImage} alt="doctor" />
                <div className="card-profile-inner">
                  <p>{name ? name : " - "}</p>
                  <p>{`${address.buildingNo ? address.buildingNo + "," : ""}${
                    address.buildingName ? address.buildingName + "," : ""
                  } ${address.addressLine1 ? address.addressLine1 + "," : ""}${
                    address.addressLine2 ? address.addressLine2 + "," : ""
                  }`}</p>
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
                <img src={drImage} alt="doctor" />
                <div className="card-profile-inner">
                  <p>{`${firstName ? firstName : " - "} ${lastName ? lastName : " - "}`}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  function renderHowWework() {
    return <HowItWorks />;
  }
  return (
    <div className="App">
      <Header></Header>
      <div className="main-area">
        <h2>Popular Clinics in this area</h2>
        {renderClinics()}
        <h2>Popular Doctors in this area</h2>
        {renderDoctors()}
        <div className="section-one">{renderHowWework()}</div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DashboardScreen;
