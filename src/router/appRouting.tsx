import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "../components/sideBar/sideBarScreen";
import { AuthContext, SideBarContext } from "../contexts";
import AppointmentConfirmScreen from "../pages/App/Appointments/appointmentConfirmScreen";
import ProfileScreen from "../pages/App/Profile/profileScreen";

const Dashboard = React.lazy(() => import("../pages/App/Dashboard/dashBoardScreen"));
const Login = React.lazy(() => import("../pages/Auth/Login/loginScreen"));
const Signup = React.lazy(() => import("../pages/Auth/Signup/signupScreen"));
const ForgotPassword = React.lazy(() => import("../pages/Auth/ForgotPassword/forgotPassword"));
const OTP = React.lazy(() => import("../pages/Auth/OTP/otpScreen"));
const ChangePassword = React.lazy(() => import("../pages/Auth/ChangePassword/changePasswordScreen"));
const Profile = React.lazy(() => import("../pages/App/Profile/profileScreen"));
const Appointments = React.lazy(() => import("../pages/App/Appointments/appointmentScreen"));
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
          {isAuthenticated ?
            <>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/appointments" element={<Appointments />}></Route>
              <Route path="/appointment-confirm" element={<AppointmentConfirmScreen />}></Route>
            </>
            : null
          }
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};
