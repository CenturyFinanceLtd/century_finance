import React from "react";
// Slider and related CSS imports are removed
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// Testimonial image imports (ts1, ts2, ts3) are removed as they are no longer used
// import ts1 from "../../images/testimonial/thumb1.png";
// import ts2 from "../../images/testimonial/thumb2.png";
// import ts3 from "../../images/testimonial/thumb3.png";

import shape1 from "../../images/testimonial/shape-1.png"; // Kept as it's for section styling
import shape2 from "../../images/testimonial/shape-2.png"; // Kept as it's for section styling

// The 'testimonial' array data is removed
// const testimonial = [ ... ];

const Testimonial = (props) => {
  // The 'settings' object for the slider is removed
  // const settings = { ... };

  return (
    <section
      className={`wpo-testimonial-section section-padding ${props.tsClass}`}>
      <div className="container">
        <div className="wpo-section-title-s2">
          <small>Mission</small>
          <h2>
            Our&nbsp;
            <span>
              Mission
              <i className="shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127 50"
                  fill="none">
                  <path d="M93.7612 1.81784C66.465 0.219842 33.8091 5.17362 13.0789 17.0213C8.79185 19.613 4.89164 22.7583 3.51303 26.4753C2.63381 28.8599 3.0998 31.4212 4.73866 33.628C9.16992 39.3831 19.7047 42.2235 28.8345 44.0263C48.2459 47.5238 70.0346 48.2058 89.6377 44.9783C103.011 42.7895 123.633 36.7419 122.853 26.3414C122.325 18.3121 111.17 13.1321 100.413 10.3435C85.1589 6.42839 68.4696 5.04759 52.1074 4.91817C43.9412 4.90804 35.7909 5.85108 28.1364 7.66965C20.6472 9.49496 13.1053 12.0551 7.80009 15.9713C6.9156 16.6375 5.31367 15.8521 6.15947 15.1217C12.7835 9.99574 23.4255 6.67934 33.2429 4.81914C47.5143 2.12618 62.6896 2.92293 77.2231 4.23396C97.4486 6.23258 127.877 12.1328 126.259 28.3896C125.459 33.4367 119.995 37.6039 113.784 40.4769C96.4604 48.2317 73.388 50.0401 52.7598 48.9474C40.1518 48.2126 27.4066 46.7384 16.0173 43.0191C7.03166 40.0695 -0.636876 35.0786 0.0418796 28.1679C1.3185 18.1624 19.4022 10.7047 32.4199 6.91791C43.9271 3.58801 56.2749 1.48473 68.8037 0.556321C77.1545 -0.0581187 85.6161 -0.11101 93.9792 0.474171C94.5578 0.514683 94.9763 0.847786 94.913 1.21915C94.8514 1.58714 94.3362 1.85385 93.7612 1.81784Z" />
                </svg>
              </i>
            </span>
          </h2>
        </div>
        <div className="wpo-testimonial-wrap">
          {" "}
          {/* This class can be adjusted if needed for static content */}
          <div className="row justify-content-center">
            {" "}
            {/* Centering content */}
            <div className="col-lg-10 col-md-12">
              {" "}
              {/* Adjust column width as needed */}
              {/* New static text content */}
              <div
                className="mission-content"
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  lineHeight: "1.8",
                }}>
                <p>
                  Our mission is to empower the individual to achieve their
                  financial goal through informed investing.
                </p>
                <p>
                  Our aim to make you understanding stock trading in simple and
                  straight forward language. We are passionate about making the
                  stock market accessible and portable for everyone.
                </p>
                <p>
                  Our focus is on creating a supporting community where people
                  can become successful trader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <img src={shape1} alt="" />
      </div>
      <div className="shape-2">
        <img src={shape2} alt="" />
      </div>
    </section>
  );
};

export default Testimonial;
