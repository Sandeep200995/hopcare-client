import React from 'react'
import './aboutUs.scss';
import Header from '../../../components/page/Header/header';

const AboutUs = () => {
    return (
        <div className="App">
            <Header />
            <div className="about-us">
                <h1>About Us</h1>
                <p>Welcome to HOPcare, our  hassle-free medical appointment booking platform. Our mission is to make it easy for patients to find and book appointments with the nearest clinic for treatment. We understand that finding the right clinic and booking an appointment can be a daunting task, which is why we've created a simple and easy-to-use platform to help you get the care you need.</p>
                <p> Our platform allows you to browse and compare clinics based on location, services, and availability. You can book appointments with just a few clicks, and our user-friendly interface makes it easy to manage your appointments and keep track of your medical history.</p>
                <p>At our core, we are dedicated to providing the best possible experience for our patients. We believe that everyone deserves access to quality healthcare, and we are committed to making that a reality. Whether you need a routine check-up or specialized treatment, we are here to help you every step of the way.</p>
                <p> Thank you for choosing our medical appointment booking application. We look forward to serving you and helping you get the care you need.</p>
            </div>
        </div>
    )
}

export default AboutUs;
