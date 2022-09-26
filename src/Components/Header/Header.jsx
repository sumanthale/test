import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/elves/logo.png";
import menus from "../../pages/menu";
import DarkMode from "./DarkMode";

import { AuthContext } from "../../context/AuthContext";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Tooltip,
} from "@mui/material";
import { signIn, signOutUser } from "../../Helpers/Login";
import Google from "../../assets/images/google.png";

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".js-header");
    const scrollTop = window.scrollY;

    scrollTop >= 100
      ? header.classList.add("is-fixed")
      : header.classList.remove("is-fixed");
    scrollTop >= 120
      ? header.classList.add("is-small")
      : header.classList.remove("is-small");
  };

  const menuLeft = useRef(null);
  const btnToggle = useRef(null);

  const menuToggle = () => {
    menuLeft.current.classList.toggle("active");
    btnToggle.current.classList.toggle("active");
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  let { user } = React.useContext(AuthContext);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      {/* <TopBar /> */}
      <header id="header_main" className="header_1 js-header" ref={headerRef}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div
                className="mobile-button"
                ref={btnToggle}
                onClick={menuToggle}
              >
                <span></span>
              </div>
              <div id="site-header-inner" className="flex">
                <div id="site-logo" className="clearfix">
                  <div id="site-logo-inner">
                    <Link to="/" rel="home" className="main-logo">
                      <img
                        id="logo_header"
                        className="logo-dark"
                        src={logo}
                        alt="nft-gaming"
                        style={{
                          width: "220px",
                        }}
                      />
                      <img
                        id="logo_header"
                        className="logo-light"
                        src={logo}
                        alt="nft-gaming"
                        style={{
                          width: "220px",
                        }}
                      />
                    </Link>
                  </div>
                </div>
                {/* <form className="form-search">
                  <input type="text" placeholder="Search here" />
                  <button>
                    <i className="far fa-search"></i>
                  </button>
                </form> */}

                <nav id="main-nav" className="main-nav" ref={menuLeft}>
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map(
                      (data, index) =>
                        (!data.hide || user) && (
                          <li
                            key={index}
                            onClick={() => handleOnClick(index)}
                            className={`menu-item mx-1 ${
                              data.namesub ? "menu-item-has-children" : ""
                            }  ${activeIndex === index ? "active" : ""} `}
                          >
                            {data.scrolling ? (
                              <>
                                <a href={data.links}>{data.name}</a>
                              </>
                            ) : (
                              <>
                                <Link to={data.links}>{data.name}</Link>
                                {data.namesub && (
                                  <ul className="sub-menu">
                                    {data.namesub.map((submenu, index) => (
                                      <li
                                        key={index}
                                        className={
                                          pathname === submenu.links
                                            ? "menu-item current-item"
                                            : "menu-item "
                                        }
                                      >
                                        <Link to={submenu.links}>
                                          {submenu.sub}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </>
                            )}
                          </li>
                        )
                    )}
                  </ul>
                </nav>
                {user ? (
                  <Box className="mx-1">
                    <Tooltip title="Log Out">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Admin" src={user.photoURL}>
                          A
                        </Avatar>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem
                        onClick={() => {
                          handleCloseUserMenu();
                          signOutUser();
                        }}
                      >
                        <Typography textAlign="center">Log Out</Typography>
                      </MenuItem>
                    </Menu>
                  </Box>
                ) : (
                  <Box className="mx-1">
                    <Tooltip title="Admin Login">
                      <IconButton
                        onClick={() => {
                          signIn();
                        }}
                        sx={{ p: 0 }}
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src={Google}
                          sx={{
                            backgroundColor: "transparent",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                )}
                <DarkMode />
                {/* <div className="button-connect-wallet ml-3">
                  <Link
                    to="/connect-wallet"
                    className="sc-button wallet   style-2"
                  >
                    <img src={icon} alt="icon" />
                    <span>Connect Wallet</span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
