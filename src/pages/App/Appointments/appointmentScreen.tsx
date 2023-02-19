import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/page/Header/header";
import * as ClinicActions from "../../../redux/actions/clinic/index";
import * as CLINIC_ACTION_TYPES from "../../../redux/actions/clinic/types";


function AppointmentScreen() {
  const history: any = useNavigate();
  const dispatch: any = useDispatch();
  const [selAppTab, setAppointTab]: any = useState({ type: "upcoming" });
  const [allAppointmentTypes]: any = useState([{ type: "upcoming", name: "Upcoming" }, { type: "today", name: "Today" }, { type: "past", name: "Past" }])


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
    return (
      <div className='booking-tab'>
        {allAppointmentTypes.map((appInfo: any, ind: number) => {
          const { name, type } = appInfo;
          return (<button key={`${ind}_${appInfo.type}`} onClick={() => setAppointTab({ ...selAppTab, appInfo })} className={`btn-booking ${selAppTab.type === type ? "active" : ""}`}>{name ? name : " - "}</button>);
        })}
      </div>
    )
  }, [allAppointmentTypes, selAppTab])

  return (
    <div className="App">
      <Header addLeftBackBtn ></Header>
      {renderTabs()}
      {renderAppointments()}
    </div>
  );
}

export default AppointmentScreen;
