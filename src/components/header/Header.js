import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import Logo from "../../images/logo.png";
import HeaderTopbar from "../HeaderTopbar/HeaderTopbar";

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false);
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header id="header">
      <HeaderTopbar topbarClass={props.topbarClass} />
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="navbar-header">
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/home">
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-1 col-1">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Home
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/home">
                            Home Style 1
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home-2">
                            Home Style 2
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home-3">
                            Home Style 3
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home-4">
                            Home Style 4
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/home-5">
                            Home Style 5
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        About
                      </Link>
                    </li>

                    <li>
                      <Link onClick={ClickHandler} to="/contact">
                        Contact
                      </Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Customer Services
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/lesson">
                            Training Program
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/gallery">
                            Portpholio
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/testimonial">
                            Finance Micro
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/teacher">
                            Investment Plan
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/team-single/Courtney-Henry">
                            Subscription Plan
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link onClick={ClickHandler} to="/online_training_program">
                        Online Training Program
                      </Link>
                    </li>

                    {/* <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Online Training Course
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/blog">
                            Blog right sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-left-sidebar">
                            Blog left sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/blog-fullwidth">
                            Blog fullwidth
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link onClick={ClickHandler} to="/">
                            Blog details
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link
                                onClick={ClickHandler}
                                to="/blog-single/Become-a-great-WordPress-&-PHP-developer.">
                                Blog details right sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                to="/blog-single-left-sidebar/Become-a-great-WordPress-&-PHP-developer.">
                                Blog details left sidebar
                              </Link>
                            </li>
                            <li>
                              <Link
                                onClick={ClickHandler}
                                to="/blog-single-fullwidth/Become-a-great-WordPress-&-PHP-developer.">
                                Blog details fullwidth
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Shop
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/shop">
                            Shop
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/product-single/Principles-and-Policies">
                            Shop Single
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/cart">
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/checkout">
                            Checkout
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Pages
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/lesson">
                            Lesson
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/gallery">
                            Gallery
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/testimonial">
                            Testimonial
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/teacher">
                            Teachers
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/team-single/Courtney-Henry">
                            Teacher Single
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/become-teacher">
                            Become Teacher
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/faq">
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/404">
                            404 Error
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="/">
                        Course
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/course">
                            Courses Style 1
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/course-2">
                            Courses Style 2
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/course-3">
                            Courses Style 3
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={ClickHandler}
                            to="/course-single/Learn-WordPress-&-Elementor-for-Beginners">
                            Courses single
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-2">
                <div className="header-right">
                  <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className="search-toggle-btn">
                        <i
                          className={`fi ti-search ${
                            menuActive ? "ti-close" : "fi "
                          }`}></i>
                      </button>
                      <div
                        className={`header-search-form ${
                          menuActive ? "header-search-content-toggle" : ""
                        }`}>
                        <form onSubmit={SubmitHandler}>
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here..."
                            />
                            <button type="submit">
                              <i className="fi flaticon-search"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="close-form">
                    <Link onClick={ClickHandler} className="login" to="/login">
                      <span className="text">Sign In</span>
                      <span className="mobile">
                        <i className="fi flaticon-charity"></i>
                      </span>
                    </Link>
                    <Link
                      onClick={ClickHandler}
                      className="theme-btn"
                      to="/register">
                      <span className="text">Sign Up</span>
                      <span className="mobile">
                        <i className="fi flaticon-charity"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
