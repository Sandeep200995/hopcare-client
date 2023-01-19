import React from 'react';

import HospitalIcon from "../../../assets/dummy/hospital.svg";
import BookedIcon from "../../../assets/dummy/icons8-booking-64.png";
import UserIcon from "../../../assets/dummy/user.svg";
import VideoIcon from "../../../assets/dummy/video-camera.png";
import BookingIcon from "../../../assets/dummy/appointment.png";
import EditIcon from "../../../assets/dummy/edit.svg";
import RupeeIcon from "../../../assets/dummy/rupee.svg";
import InpersonIcon from "../../../assets/dummy/contact-book.svg";
import LocationIcon from "../../../assets/dummy/location.svg";

import "./confirmBooking.scss";
import { useNavigate } from 'react-router-dom';

const AppointmentConfirmScreen = () => {
    const history: any = useNavigate();
    return (
        <div className="confirm-booking-area">
            <div>
                <button onClick={() => history('/')} className="btn-back">&larr;</button>
            </div>
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
                    <button className="edit-btn"><img src={EditIcon} alt="" /></button>
                    <div>
                        <img src={BookedIcon} alt="booked" />
                    </div>
                    <h2>Hi Hemant maurya!</h2>
                    <p className="appo-confrm">Appointment Details</p>

                    <div className="time-details">
                        <h4>02:48 PM</h4>
                        <p>2nd Oct 2023</p>

                        <div className="details-icons">
                            <h5><img src={UserIcon} alt="user" />Dr Ankit Singh</h5>
                            <p className="text-without-icon">Family Physican</p>

                            <p><img src={RupeeIcon} alt="rupee" /> 700</p>
                            <p><img src={InpersonIcon} alt="person" /> In-person</p>
                            <p><img src={LocationIcon} alt="location" />  Dr. U.P. Singh Memorial Clinic, Sale Tax Road, Munshi Pura, Uttar Pradesh, India, Mau, Uttar Pradesh, 275101</p>
                        </div>
                    </div>
                    <div className="submit-area">
                        <button className="btn">Submit</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AppointmentConfirmScreen
