import React, { useState, useEffect } from "react";

// icons
import { BsSearch } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { BsMessenger } from "react-icons/bs";
import { RiNotification2Fill } from "react-icons/ri";
import { BsCaretDownFill } from "react-icons/bs";

// components/ elements
import NavbarOptions from "./NavbarOptions";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";
import { ContextVal } from "../../context/Context";
import Loading from "../Loading";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { MdClose } from "react-icons/md";
import { GrMenu } from "react-icons/gr";

// style
import "../../styles/components/header.css";

const Header = () => {
  const [{ user, OpenSideBar }, dispatch] = ContextVal();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const SignOutTheUser = () => {
    signOut(auth);
    alert("sign out sucessfully");
  };

  const OpenTheSideBar = () => {
    dispatch({
      type: "OPEN__THE__SIDEBAR",
      OpenSideBar: !OpenSideBar,
    });
  };

  return (
    <>
      <header className="header">
        <div className="header__Left">
          <div className="header__logo">
            <img src="../images/logo.svg" />
          </div>
          <div className="header__search">
            <form>
              <div className="search__icon">
                <BsSearch className="icon" />
              </div>

              <input type="text" placeholder="Search Facebook" />
            </form>
          </div>
        </div>

        <nav className="header__navbar">
          <div className="navbar__close">
            <MdClose className="icon" />
          </div>
          <ul>
            <NavbarOptions />
          </ul>
        </nav>
        <div className="hamburgar" onClick={OpenTheSideBar}>
          <GrMenu className="icon" />
        </div>

        <div className="header__Right">
          <div className="headerRight__userProfile">
            <div className="userProfile__img">
              <Avatar alt={user?.displayName} src={user?.photoURL}></Avatar>
            </div>

            <span style={{ textTransform: "uppercase" }}>
              {/* {user?.displayName.substring(0, 1)} */}
            </span>
          </div>

          <div className="headerRight__options">
            <span className="menu">
              <CgMenuGridO className="option__icon" />
            </span>

            <span>
              <BsMessenger className="option__icon" />
            </span>

            <span>
              <RiNotification2Fill className="option__icon" />
            </span>

            {/* drop down */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  className="headerOption"
                >
                  <BsCaretDownFill className="option__icon" />
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>

              <MenuItem onClick={SignOutTheUser}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
