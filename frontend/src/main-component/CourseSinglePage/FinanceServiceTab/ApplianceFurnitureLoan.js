import React from "react";
import abimg from "../../../images/about/appliance.png";
import shape from "../../../images/about/shape.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const ApplianceFurnitureLoan = (props) => {
  return (
    <section className="wpo-about-section-s2 section-padding">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img">
                <img src={abimg} alt="" />
                <div className="back-shape">
                  <img src={shape} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  <small>Basic Plan</small>
                  <h2>A New Different Way To Improve Your Skills.</h2>
                </div>
               
                <Link
                  onClick={ClickHandler}
                  to="/about"
                  className="theme-btn-s2">
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplianceFurnitureLoan;
