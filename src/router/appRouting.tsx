import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "../components/sideBar/sideBarScreen";
import { AuthContext, SideBarContext } from "../contexts";
import AboutUs from "../pages/App/AboutUs/aboutUs";
import AppointmentConfirmScreen from "../pages/App/Appointments/appointmentConfirmScreen";
import HealthArticles from "../pages/App/Articles/healthArticles";
import ProfileScreen from "../pages/App/Clinic/clinicProfileScreen";
import BookConsultation from "../pages/App/Consultation/bookConsultation";
import ContactUs from "../pages/App/ContactUs/contactUs";
import Help from "../pages/App/Help/help";

const Dashboard = React.lazy(() => import("../pages/App/Dashboard/dashBoardScreen"));
const Login = React.lazy(() => import("../pages/Auth/Login/loginScreen"));
const Signup = React.lazy(() => import("../pages/Auth/Signup/signupScreen"));
const ForgotPassword = React.lazy(() => import("../pages/Auth/ForgotPassword/forgotPassword"));
const OTP = React.lazy(() => import("../pages/Auth/OTP/otpScreen"));
const ChangePassword = React.lazy(() => import("../pages/Auth/ChangePassword/changePasswordScreen"));
const ClinicProfile = React.lazy(() => import("../pages/App/Clinic/clinicProfileScreen"));
const DoctorProfile = React.lazy(() => import("../pages/App/Doctor/doctorProfileScreen"));
const Appointments = React.lazy(() => import("../pages/App/Appointments/appointmentScreen"));
const ClinicAppointments = React.lazy(() => import("../pages/App/Appointments/clinic/clinicAppointments"));
interface ContainerProps {
  role?: any;
}

export const AppRouting = (props: ContainerProps) => {
  const { role } = props;
  const { isSideActive, toggleSidebar } = React.useContext(SideBarContext);
  const { isAuthenticated } = React.useContext(AuthContext);
  return (
    <Router>
      <div className="main-cont">
        <SideBar onSideBarActive={isSideActive} onCloseBtnClk={() => toggleSidebar(!isSideActive)} />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/otp" element={<OTP />}></Route>
          <Route path="/newPassword" element={<ChangePassword />}></Route>
          <Route path="/appointments" element={<Appointments />}></Route>
          {isAuthenticated ?
            <>
              <Route path="/appointments" element={<Appointments />}></Route>
              <Route path="/appointment-confirm" element={<AppointmentConfirmScreen />}></Route>
            </>
            : null
          }
          <Route path="/clinic_appointments" element={<ClinicAppointments />}></Route>
          <Route path="/consultation" element={<BookConsultation />}></Route>
          <Route path="/articles" element={<HealthArticles />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/clinic/:id" element={<ClinicProfile />}></Route>
          <Route path="/doctor/:id" element={<DoctorProfile />}></Route>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};
