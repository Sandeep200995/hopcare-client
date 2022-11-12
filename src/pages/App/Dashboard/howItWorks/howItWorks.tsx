import React from "react";
import "./howItWorks.scss";
import clicks from "../../../../assets/dummy/clicks.jpg";
import pre from "../../../../assets/dummy/pre.jpg";
import feedback from "../../../../assets/dummy/feedback11.jpg";
import prescription from "../../../../assets/dummy/prescription.jpg";

const HowItWorks = () => {
  return (
    <>
      <h2 className="main-tag mtb"> {"How it works"}</h2>
      <div className="how-it-work">
        <div className="how-it-inner">
          <span className="how-it-img">
            <img src={clicks} />
          </span>
          <p>Select a doctor, disease or speciality</p>
        </div>
        <div className="how-it-inner">
          <span className="how-it-img">
            <img src={pre} />
          </span>
          <p>Fill patient's complain & basic details</p>
        </div>

        <div className="how-it-inner">
          <span className="how-it-img">
            <img src={feedback} />
          </span>
          <p>Select talk mode- Text/Audio/Video</p>
        </div>

        <div className="how-it-inner">
          <span className="how-it-img">
            <img src={prescription} />
          </span>
          <p>Consult & Download e-prescription</p>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
