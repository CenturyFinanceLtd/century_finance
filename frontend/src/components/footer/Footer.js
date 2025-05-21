import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo-s2.png";
// Import the necessary icons from react-icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Updated Twitter "X" icon

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/home">
                    <img src={Logo} alt="Century Finance Limited Logo" />{" "}
                    {/* Added alt text */}
                  </Link>
                </div>
                <p>
                  Smart trading begins with smart learning, gain insights,
                  build confidence, master strategies, reduce risks, and grow
                  your financial future.
                </p>
                {/* Start: Updated Social Media Section */}
                <div className="social">
                  {" "}
                  {/* Kept the wrapper div */}
                  <ul className="social-icons">
                    {" "}
                    {/* Used className from HeaderTopbar */}
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61576206568813"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook">
                        {" "}
                        {/* Added aria-label */}
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/CenturyFinanceL"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter / X">
                        {" "}
                        {/* Added aria-label */}
                        <FaXTwitter />
                      </a>
                    </li>
                    <li>
                      {/* Note: The LinkedIn href="/" probably needs updating */}
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn">
                        {" "}
                        {/* Added aria-label */}
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/centuryfinancelimited/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram">
                        {" "}
                        {/* Added aria-label */}
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.pinterest.com/centuryfinancelimited/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Pinterest">
                        {" "}
                        {/* Added aria-label */}
                        <FaPinterestP />
                      </a>
                    </li>
                    <li>
                      {/* Note: The YouTube href might need verification */}
                      <a
                        href="https://www.youtube.com/channel/UCb_EQ_95yyj4CN8kE6KMwYA"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube">
                        {" "}
                        {/* Added aria-label */}
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* End: Updated Social Media Section */}
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/home">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/about">
                      About Us
                    </Link>
                  </li>
                  {/* <li>
                    <Link onClick={ClickHandler} to="/course">
                      Featured Courses
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link onClick={ClickHandler} to="/teacher">
                      Teachers
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link onClick={ClickHandler} to="/blog">
                      Latest News
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget s2">
                <div className="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  {/* <li>
                    <Link onClick={ClickHandler} to="/course">
                      Courses
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link onClick={ClickHandler} to="/lesson">
                      Lesson
                    </Link>
                  </li> */}
                  <li>
                    <Link onClick={ClickHandler} to="/register">
                      Sign Up
                    </Link>
                  </li>
                  {/* <li>
                    <Link onClick={ClickHandler} to="/testimonial">
                      Testimonials
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-12 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-contact-widget">
                <div className="widget-title">
                  <h3>Contact Us</h3>
                </div>
                <div className="contact-ft">
                  <ul>
                    <li style={{ textTransform: "lowercase" }}>
                      <i className="fi flaticon-email"></i>
                      customerservice@centuryfinancelimited.com
                    </li>
                    {/* <li>
                      <i className="fi flaticon-phone-call"></i>(+91) 8815532159
                    </li> */}
                    <li>
                      <i className="fi flaticon-placeholder"></i>Iconic
                      Corenthum, 5th floor, Tower C, Block A, Industrial Areas
                      Sector 62, Noida, Uttar Pradesh, 201301
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-lg-6 col-md-12 col-12">
              <ul>
                <li>
                  {/* Updated year to current year 2025 */}©{" "}
                  {new Date().getFullYear()}{" "}
                  <Link onClick={ClickHandler} to="/">
                    Century Finance Limited
                  </Link>
                  . All rights reserved.
                </li>
              </ul>
            </div>
            <div className="col col-lg-6 col-md-12 col-12">
              <div className="link">
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/privacy">
                      Privace & Policy {/* Typo: Should be Privacy */}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/terms">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/about">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/faq">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
