import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { NavLink } from "react-router-dom";
import './style.css';

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
  },

  {
    id: 2,
    title: "Company",
    link: "/",
    submenu: [
      {
        id: 41,
        title: "About",
        link: "/about",
      },
      {
        id: 42,
        title: "Contact",
        link: "/contact",
      },
    ],
  },

  {
    id: 3,
    title: "Customer Services",
    link: "/",
    submenu: [
      {
        id: 31,
        title: "Training Program",
        link: "/training-program",
      },
      {
        id: 32,
        title: "Online Courses",
        link: "/online-courses",
      },
      {
        id: 33,
        title: "Portfolio",
        link: "/portfolio",
      },
      {
        id: 34,
        title: "Finance",
        link: "/finance",
      },
      {
        id: 35,
        title: "Investment Plan",
        link: "/investment-plan",
      },
      {
        id: 36,
        title: "Subscription Plan",
        link: "/calls-subscription-plan",
      },
    ],
  },
  {
    id: 4,
    title: "Markets",
    link: "/",
    submenu: [
      {
        id: 41,
        title: "Stocks",
        link: "/stocks",
      },
      {
        id: 42,
        title: "Commodities",
        link: "/commodities",
      },
      {
        id: 43,
        title: "Crypto",
        link: "/crypto",
      },
      {
        id: 44,
        title: "Gold",
        link: "/gold",
      },
      {
        id: 45,
        title: "Currencies",
        link: "/currencies",
      },
    ],
  },

  {
    id: 5,
    title: "Investment",
    link: "/investment",
  },

  {
    id: 6,
    title: "Finance",
    link: "/finance-services",
  },

  {
    id: 7,
    title: "Download",
    link: "/", // This is the parent item's link
    submenu: [
      // ENSURE THESE pdfPath values are correct and work when you type them in the browser directly
      // e.g., http://localhost:3000/pdf/smart-saver.pdf (if 'pdf' is in your public folder)
      {
        id: 71,
        title: "Smart Saver Plan",
        link: "/", // This link is for the NavLink if pdfPath wasn't present
        pdfPath: "/pdf/smart-saver.pdf", // Example: Assumes 'pdf' folder in 'public'
      },
      {
        id: 72,
        title: "Money Max Plan",
        link: "/",
        pdfPath: "/pdf/money-max.pdf", // Example
      },
      {
        id: 73,
        title: "Wealth Boost",
        link: "/",
        pdfPath: "/pdf/wealth-boost.pdf", // Example
      },
      {
        id: 74,
        title: "Rich Boast",
        link: "/",
        pdfPath: "/pdf/rich-boast.pdf", // Example
      },
      {
        id: 75,
        title: "Fast Track",
        link: "", // Link for NavLink if no pdfPath
        pdfPath: "/pdf/fast-track.pdf", // Example
      },
    ],
  },
];


const MobileMenu = () => {
  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const toggleMenu = (id) => {
    setOpenId(openId === id ? 0 : id);
  };

  return (
    <div>
      <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
        <div className="menu-close">
          <div className="clox" onClick={() => setMenuState(!menuActive)}>
            <i className="ti-close"></i>
          </div>
        </div>

        <ul className="responsivemenu">
          {menus.map((item, mn) => {
            return (
              <ListItem className={item.id === openId ? "active" : ""} key={mn}>
                {item.submenu ? (
                  <Fragment>
                    <p onClick={() => toggleMenu(item.id)}>
                      {item.title}
                      <i
                        className={
                          item.id === openId
                            ? "fa fa-angle-up"
                            : "fa fa-angle-down"
                        }></i>
                    </p>
                    <Collapse
                      in={item.id === openId}
                      timeout="auto"
                      unmountOnExit>
                      <List className="subMenu">
                        {item.submenu.map((submenu, i) => {
                          if (submenu.pdfPath) {
                            // ** MODIFICATION IS HERE for PDF download links **
                            // Removed onClick handler to allow default browser download behavior.
                            // If you need to close the menu or scroll, you can try re-adding
                            // those actions carefully, possibly with a small timeout for setMenuState.
                            return (
                              <ListItem key={i}>
                                <a
                                  href={submenu.pdfPath} // Ensure this path is correct and works manually!
                                  download
                                  // onClick has been removed to test default download behavior
                                  style={{
                                    display: "block",
                                    padding: "10px 15px",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                  }}>
                                  {submenu.title}
                                </a>
                              </ListItem>
                            );
                          } else {
                            // Original NavLink for regular navigation
                            return (
                              <ListItem key={i}>
                                <NavLink
                                  onClick={() => {
                                    ClickHandler();
                                    setMenuState(false); // Close menu on navigation
                                  }}
                                  className={({ isActive }) =>
                                    isActive ? "active" : ""
                                  }
                                  to={submenu.link}>
                                  {submenu.title}
                                </NavLink>
                              </ListItem>
                            );
                          }
                        })}
                      </List>
                    </Collapse>
                  </Fragment>
                ) : (
                  <NavLink
                    onClick={() => {
                      ClickHandler();
                      setMenuState(false); // Close menu on navigation
                    }}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={item.link}>
                    {item.title}
                  </NavLink>
                )}
              </ListItem>
            );
          })}
        </ul>
      </div>

      <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
        <button type="button" className="navbar-toggler open-btn">
          <span className="icon-bar first-angle"></span>
          <span className="icon-bar middle-angle"></span>
          <span className="icon-bar last-angle"></span>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;