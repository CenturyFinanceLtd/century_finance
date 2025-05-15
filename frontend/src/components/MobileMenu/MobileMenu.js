import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { NavLink } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
    },

    {
        id: 2,
        title: 'About',
        link: '/about',
    },

    {
        id: 3,
        title: 'Contact',
        link: '/contact',
    },

    {
        id: 4,
        title: 'Customer Services',
        link: '/',
        submenu: [
            {
                id: 41,
                title: 'Training Program',
                link: '/',
            },
            {
                id: 42,
                title: 'Online Courses',
                link: '/',
            },
            {
                id: 43,
                title: 'Portfolio',
                link: '/',
            },
            {
                id: 44,
                title: 'Finance',
                link: '/',
            },
            {
                id: 45,
                title: 'Investment Plan',
                link: '/'
            },
            {
                id: 46,
                title: 'Subscription Plan',
                link: '/'
            }
        ]
    },
    {
        id: 5,
        title: 'Markets',
        link: '/',
        submenu: [
            {
                id: 51,
                title: 'Stocks',
                link: '/lesson'
            },
            {
                id: 52,
                title: 'Commodities',
                link: '/'
            },
            {
                id: 53,
                title: 'Crypto',
                link: '/'
            },
            {
                id: 54,
                title: 'Gold',
                link: '/',
            },
            {
                id: 55,
                title: 'Currencies',
                link: '/'
            }
        ]
    },

    {
        id: 6,
        title: 'Investment',
        link: '/',
    },

    {
        id: 7,
        title: 'Finance',
        link: '/',
    },

    {
        id: 8,
        title: 'Blog',
        link: '/blog',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <NavLink onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</NavLink>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <NavLink className="active"
                                        to={item.link}>{item.title}</NavLink>
                                }
                            </ListItem>
                        )
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
    )
}

export default MobileMenu;