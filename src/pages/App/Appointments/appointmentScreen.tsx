import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/page/Header/header";
import * as COMMON_ACTIONS from "../../../redux/actions/common";
import * as AppointmentActions from "../../../redux/actions/appointment/index";
import * as APPOINTMENT_ACTION_TYPES from "../../../redux/actions/appointment/types";
import moment from "moment";
import "./appointmentScreen.scss";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


function AppointmentScreen() {
  const navigate: any = useNavigate();
  const dispatch: any = useDispatch();
  const appointmentState = useSelector((state: any) => state.appointmentData);
  const [selAppTab, setAppointTab]: any = useState({ type: "upcoming" });
  const [allAppointmentTypes]: any = useState([{ type: "upcoming", name: "Upcoming" }, { type: "today", name: "Today" }, { type: "past", name: "Past" }])
  const [appointmentData, setAppointmentData]: any = useState({ list: [], total: 0, skip: 0 });

  useEffect(() => {
    dispatch(COMMON_ACTIONS.startLoading({}));
    dispatch(AppointmentActions.getAllAppointmentsAction({ formData: { limit: 20, skip: 0 } }));
  }, [])



  useEffect(() => {
    switch (appointmentState.case) {
      case APPOINTMENT_ACTION_TYPES.GET_ALL_APPOINTMENTS_SUCCESS:
        setAppointmentData(appointmentState.userAppointments);
        dispatch(COMMON_ACTIONS.stopLoading({}));
        break;
      case APPOINTMENT_ACTION_TYPES.GET_ALL_APPOINTMENTS_FAILURE:
        // toast(appointmentState.message);
        toast(appointmentState.message, { position: "top-center" });
        dispatch(COMMON_ACTIONS.stopLoading({}));
        break;
      default:
        break;
    }
  }, [appointmentState]);


  const renderTabs = useCallback(() => {
    return (
      <div className='booking-tab'>
        {allAppointmentTypes.map((appInfo: any, ind: number) => {
          const { name, type } = appInfo;
          return (<button key={`${ind}_${appInfo.type}`} onClick={() => setAppointTab({ ...selAppTab, appInfo })} className={`btn-booking ${selAppTab.type === type ? "active" : ""}`}>{name ? name : " - "}</button>);
        })}
      </div>
    )
  }, [allAppointmentTypes, selAppTab])

  const renderAppointments = useCallback(() => {
    // let appointments = [{""}]
    return (
      <div className='booking-tab'>
        {appointmentData.list.map((appInfo: any, ind: number) => {
          const { appointmentDate,
            clinicId,
            ptAge,
            ptFirstName,
            ptGender,
            ptLastName,
            ptPaymentMode,
            ptPaymentStatus,
            ptPhoneNumber,
            _id } = appInfo;
          return (
            <div>
              <div className='booking-page'>
                <div className='booking-card'>
                  {/* <img src={ImgHosp} /> */}
                  <div className='booking-card-inner'>
                    {/* <span>Current</span> */}
                    <h5>Patient Details</h5>
                    <p>{`${ptFirstName ? ptFirstName : ""} ${ptLastName ? ptLastName : ""} ${ptAge ? ptAge : ""}/${ptGender ? ptGender : ""}`}</p>
                    <h5>Appointment Details</h5>
                    <p>{`${appointmentDate ? moment(appointmentDate).format("dddd D MMM YY") : " - "}`}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }, [allAppointmentTypes, selAppTab, appointmentData])

  return (
    <div className="App">
      <Header addLeftBackBtn backIconClk={() => navigate("/", { replace: true })}></Header>
      {/* {renderTabs()}*/}
      {renderAppointments()}
      {/* <div>Work in progress!!!</div>
      <div>Please try after sometime</div> */}
    </div>
  );
}

export default AppointmentScreen;
