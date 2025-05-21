import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Updated Twitter "X" icon

const HeaderTopbar = ({ topbarClass }) => {
  return (
    <div className={`topbar ${topbarClass}`}>
      <h2 className="hidden">some</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-lg-7 col-md-12 col-12 d-none d-md-block">
            <div className="contact-intro">
              <ul>
                <li>
                  <i className="fi flaticon-email"></i>
                  customerservice@centuryfinancelimited.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-lg-5 col-md-12 col-12">
            <div className="contact-info">
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61576206568813"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/CenturyFinanceL"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/century-finance-ltd/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/centuryfinancelimited/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pinterest.com/centuryfinancelimited/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaPinterestP />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCb_EQ_95yyj4CN8kE6KMwYA"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopbar;
