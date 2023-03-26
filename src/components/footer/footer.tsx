import React from "react";
import "./footer.scss";
import clicks from "../../../../assets/dummy/clicks.jpg";
import pre from "../../../../assets/dummy/pre.jpg";
import feedback from "../../../../assets/dummy/feedback11.jpg";
import prescription from "../../../../assets/dummy/prescription.jpg";
import footerLogo from "../../assets/dummy/doctor-logo.svg";

const Footer = () => {
  return (
    <>

    <footer>
        <div className="footer-area footer-list">
            <div>
               <p>HOPCare</p>
            </div>

                <ul>
                    <li>Members</li> |
                    <li>Updates</li> |
                    <li>Events</li> |
                    <li>About</li>
                </ul>


        </div>
        <p className="copy-right">II - Copyright © 2020. All rights reserved.       </p>

        <div className="footer-logo-icons">
            <img className="foot-logo" src="https://img.icons8.com/color/512/facebook-new.png" alt="fb" />
            <img className="foot-logo" src="https://img.icons8.com/fluency/512/instagram-new.png" alt="insta" />
            <img className="foot-logo" src="https://img.icons8.com/color/512/linkedin.png" alt="linkedin" />
            <img className="foot-logo" src="https://img.icons8.com/color/512/twitter.png" alt="twitter" />
        </div>


    </footer>
    </>
  );
};

export default Footer;
