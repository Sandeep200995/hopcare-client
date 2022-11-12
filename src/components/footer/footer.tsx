import React from "react";
import "./footer.scss";
import clicks from "../../../../assets/dummy/clicks.jpg";
import pre from "../../../../assets/dummy/pre.jpg";
import feedback from "../../../../assets/dummy/feedback11.jpg";
import prescription from "../../../../assets/dummy/prescription.jpg";

const Footer = () => {
  return (
    <>
      <div className="footer-logo">
        <img className="header-img" src="" alt="footer-logo" />
        <ul>
          <li>{/* <ion-icon name="logo-twitter"></ion-icon> */}</li>
          <li>{/* <ion-icon name="logo-facebook"></ion-icon> */}</li>
          <li>{/* <ion-icon name="logo-instagram"></ion-icon> */}</li>
        </ul>
        <p>
          Copyright &copy; <span className="year">2027</span> by Dr practo Inc.All right reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
