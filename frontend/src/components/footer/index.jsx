import React , { useState ,useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import Button03 from '../button/Button03';

import logo from '../../assets/images/logo/logo-footer.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';



function Footer(props) {

    

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (

        <footer className="footer">
                <div className="action-box">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="action-box-inner">
                                    <h2 className="title">START YOUR FINANCIAL JOURNEY</h2>
                                    <p className="content">Join thousands of successful traders and investors who trust Century Finance Limited for their financial education and growth. </p>
                                    <div className="group-btn">
                                       
                                        <Button03 title='CONTACT US' path='/contact' />

                                        <Button title="GET STARTED" path='/signup' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-inner">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md-12">
                                <div className="widget widget-infor">
                                    <div className="logo">
                                        <img id="logo_footer" src={logo} alt="CENTURY FINANCE LIMITED" />
                                    </div>
                                    <p className="content">Your trusted partner for comprehensive financial services, investment solutions, and market training.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12">
                                <div className="widget widget-menu">
                                    <div className="menu menu-1">
                                        <h6 className="widget-title">POLICIES</h6>
                                        <ul >
                                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                            <li><Link to="/refund-policy">Refund Policy</Link></li>
                                            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                    <div className="menu menu-2">
                                        <h6 className="widget-title">USEFUL LINKS</h6>
                                        <ul >
                                            <li><Link to="/about-v1">About Us</Link></li>
                                            <li><Link to="/faq-v1">FAQs</Link></li>
                                            <li><Link to="/testimonial">Testimonials</Link></li>
                                            <li><Link to="/blogs">Blogs</Link></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12">
                                <div className="widget widget-subcribe">
                                    <h6 className="widget-title">NEWSLETTER</h6>
                                    <form action="#" id="subscribe-form">
                                        <input type="email" placeholder="Enter your email" required="" id="subscribe-email" />
                                        <button className="tf-button" type="submit" id="subscribe-button">SUBSCRIBE</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-inner">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="bottom">
                                   
                                    <p className="copy-right">CENTURY FINANCE LIMITED 2025 - ALL rights reserved</p>
    
                                    <ul className="social-item">
                                        <li><a href="https://www.linkedin.com/company/century-finance-ltd/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                                        <li><a href="https://www.facebook.com/profile.php?id=61576206568813" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                                        <li><a href="https://www.instagram.com/centuryfinancelimited/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCb_EQ_95yyj4CN8kE6KMwYA" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="https://www.pinterest.com/centuryfinancelimited/" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest"></i></a></li>
                                        <li><a href="https://x.com/CenturyFinanceL" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
            }
           </footer>
    );
}

export default Footer;
