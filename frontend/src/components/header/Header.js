// frontend/src/components/header/Header.js (or Navbar.js)
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions/authActions";
import MobileMenu from "../MobileMenu/MobileMenu"; // Corrected path assuming it's in the same components folder
import Logo from "../../images/logo.png"; // Your existing logo
import HeaderTopbar from "../HeaderTopbar/HeaderTopbar"; // Corrected path
import {
  FaUserCircle,
  FaChevronDown,
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";
import Button from "@mui/material/Button";

// Styles for the dropdown - consider moving to your SCSS file
const dropdownStyles = {
  position: "absolute",
  top: "calc(100% + 10px)",
  right: 0,
  backgroundColor: "white",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  zIndex: 1000,
  minWidth: "220px",
  overflow: "hidden",
};

const dropdownItemStyles = {
  display: "flex",
  alignItems: "center",
  padding: "12px 20px",
  textDecoration: "none",
  color: "#333",
  cursor: "pointer",
  borderBottom: "1px solid #f0f0f0",
  fontSize: "15px",
  transition: "background-color 0.2s ease",
};

const dropdownHeaderStyles = {
  padding: "15px 20px",
  borderBottom: "1px solid #e0e0e0",
  backgroundColor: "#f8f9fa",
  color: "#495057",
  fontSize: "14px",
  lineHeight: "1.4",
};

const Header = (props) => {
  const [menuActive, setMenuState] = useState(false); // For your existing search toggle
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { isAuthenticated, user: authUser } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
    setProfileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    setProfileDropdownOpen(false);
  }, [location.pathname]);

  const toggleProfileDropdown = (e) => {
    e.stopPropagation();
    setProfileDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setProfileDropdownOpen(false);
    navigate("/");
  };

  const handleEditProfile = () => {
    navigate("/edit-profile");
    setProfileDropdownOpen(false);
  };

  return (
    <header id="header">
      <HeaderTopbar topbarClass={props.topbarClass} />
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-4 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-1 col-md-4 col-4">
                <div className="navbar-header">
                  <Link onClick={ClickHandler} className="navbar-brand" to="/">
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10 col-md-1 col-1 d-small-none">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li>
                      <Link onClick={ClickHandler} to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/training-program">
                        Training Program
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/online-courses">
                        Online Courses
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/portfolio">
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        to="/calls-subscription-plan">
                        Calls Subscription Plan
                      </Link>
                    </li>

                    <li>
                      <Link onClick={ClickHandler} to="/investment">
                        Investment
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/finance-services">
                        Finance
                      </Link>
                    </li>

                    <li className="menu-item-has-children">
                      <Link onClick={ClickHandler} to="#">
                        Markets <i className="ti-angle-down"></i>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={ClickHandler} to="/equity">
                            Equity
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/commodities">
                            Commodities
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/crypto">
                            Crypto
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/gold">
                            Gold
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} to="/currencies">
                            Currencies
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/contact-us">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-1 col-md-4 col-4">
                <div className="header-right">
                  {/* <div className="header-search-form-wrapper">
                    <div className="cart-search-contact">
                      <button
                        onClick={() => setMenuState(!menuActive)}
                        className="search-toggle-btn">
                        <i
                          className={`fi ti-search ${menuActive ? "ti-close" : "fi "
                            }`}></i>
                      </button>
                      <div
                        className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""
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
                  </div> */}
                  {isAuthenticated && authUser ? (
                    <div
                      className="user-profile-section"
                      ref={dropdownRef}
                      style={{ position: "relative", marginLeft: "15px" }}>
                      <Button
                        onClick={toggleProfileDropdown}
                        aria-controls="profile-menu"
                        aria-haspopup="true"
                        style={{
                          textTransform: "none",
                          color: "#333",
                          padding: "8px",
                          minWidth: "auto",
                        }}>
                        <FaUserCircle
                          size={28}
                          style={{ color: "#555", marginRight: "8px" }}
                        />
                        <span
                          style={{
                            fontWeight: 500,
                            color: "#333",
                            display: "inline-block",
                            maxWidth: "100px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}>
                          {authUser.fullName?.split(" ")[0] || "Profile"}
                        </span>
                        <FaChevronDown
                          size={16}
                          style={{
                            marginLeft: "5px",
                            color: "#555",
                            transform: profileDropdownOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </Button>
                      {profileDropdownOpen && (
                        <div
                          className="profile-dropdown-menu"
                          style={dropdownStyles}>
                          <div style={dropdownHeaderStyles}>
                            Signed in as <br />
                            <strong>{authUser.fullName}</strong>
                          </div>
                          <div
                            onClick={handleEditProfile}
                            style={{ ...dropdownItemStyles }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#f0f0f0")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "transparent")
                            }>
                            <FaEdit
                              style={{ marginRight: "10px", color: "#555" }}
                            />{" "}
                            Edit Profile
                          </div>
                          <div
                            onClick={handleLogout}
                            style={{
                              ...dropdownItemStyles,
                              borderBottom: "none",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "#f0f0f0")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.backgroundColor =
                                "transparent")
                            }>
                            <FaSignOutAlt
                              style={{ marginRight: "10px", color: "#555" }}
                            />{" "}
                            Logout
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="close-form" style={{ marginLeft: "0px" }}>
                      <Link
                        onClick={ClickHandler}
                        // className="login"
                        className="theme-btn"
                        to="/login"
                        style={{ marginRight: "0px" }}>
                        <span className="text">Sign In</span>
                        <span className="mobile">
                          <i className="fi flaticon-charity"></i>
                        </span>
                      </Link>
                      {/* <Link
                        onClick={ClickHandler}
                        className="theme-btn"
                        to="/register">
                        <span className="text">Sign Up</span>
                        <span className="mobile">
                          <i className="fi flaticon-charity"></i>
                        </span>
                      </Link> */}
                    </div>
                  )}
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
