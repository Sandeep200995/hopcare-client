import React from 'react';

import HospitalIcon from "../../../assets/dummy/hospital.svg";
import BookedIcon from "../../../assets/dummy/icons8-booking-64.png";
import UserIcon from "../../../assets/dummy/user.svg";
import VideoIcon from "../../../assets/dummy/video-camera.png";
import BookingIcon from "../../../assets/dummy/appointment.png";

import  "./confirmBooking.scss";

const AppointmentConfirmScreen = () => {
    return (
        <div className="confirm-booking-area">
            <div className="confirm-booking-box">
            <div className="hosp-img">
                <img src={HospitalIcon} alt="Hospital" />
            </div>
            <h2 className="clinic-name">Dr. U.P. Singh Memorial Clinic</h2>
            <h4 className="fam-med">Family Medicine</h4>
            <div className="icon-text-group">
                <p><img src={UserIcon} alt="user" /> In-person visits</p>
                <p><img src={VideoIcon} alt="video" /> Video visits</p>
                <p><img src={BookingIcon} alt="booked" /> Appointments</p>
            </div>

            <div className="booking-details">
            <div>
                <img src={BookedIcon} alt="booked" />
            </div>
            <h2>Hi Hemant maurya!</h2>
            <p className="appo-confrm">Your appointment has been confirmed</p>

            <div className="time-details">
                <h4>02:48 PM</h4>
                <p>2nd Oct 2023</p>

                <div className="details-icons">
                    <h5><i></i>Dr Ankit Singh</h5>
                    <p>Family Physican</p>

                <p><i></i> 700</p>
                <p><i></i>In-person</p>
                <p><i></i>Dr. U.P. Singh Memorial Clinic, Sale Tax Road, Munshi Pura, Uttar Pradesh, India, Mau, Uttar Pradesh, 275101</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default AppointmentConfirmScreen
