import React from 'react'
import './contactUs.scss';
import Header from '../../../components/page/Header/header';

const ContactUs = () => {
    const address = "Near LIC Building Sahadatpura, Mau (275101), UTTAR PRADESH, INDIA";
    const openMap = () => {
        const encodedAddress = encodeURIComponent(address);
        window.open(`https://www.google.com/maps?q=${encodedAddress}`);
    };
    return (
        <div className="App">
            <Header />
            <div className="contact-us">
                <h1>Contact Us</h1>
                <p>
                    <strong>Address:</strong>{" "}
                    <a
                        onClick={openMap}
                        href="geo:Near LIC Bulding Sahadatpura Mau, UTTAR PRADESH (275101), INDIA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {address}
                    </a>
                </p>
                <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+919506607605">(+91) 9506607605</a> {", "}
                    <a href="tel:+919565907650">(+91) 9565907650</a>
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:hopcare6@gmail.com">
                        hopcare6@gmail.com
                    </a>
                </p>
            </div>
        </div>
    )
}

export default ContactUs;
