import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./style.css";

import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

const Scrollbar = () => {
  return (
    <div className="scrollbar-wrapper">
      <div className="col-lg-12">
        <div className="header-menu">
          <ul className="smothscroll">
            <li>
              <AnchorLink href="#scrool">
                <i className="ti-arrow-up"></i>
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Fixed WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Scrollbar;
