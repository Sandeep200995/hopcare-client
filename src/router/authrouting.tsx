import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const Profile = React.lazy(() => import("../pages/App/Profile/profileScreen"));
const Appointments = React.lazy(() => import("../pages/App/Appointments/appointmentScreen"));

interface ContainerProps {
  role?: any;
}

export const AppRouting = (props: ContainerProps) => {
  const { role } = props;
  return (
    <Router>
      <div className="main-cont">
        <Routes>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/appointments" element={<Appointments />}></Route>
        </Routes>
      </div>
    </Router>
  );
};
