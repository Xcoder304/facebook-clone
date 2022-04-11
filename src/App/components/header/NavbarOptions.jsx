import React from "react";

import { AiOutlineHome } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import { BsCameraVideo } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { MdOutlineGroups } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";

import { NavLink } from "react-router-dom";

const NavbarOptions = () => {
  return (
    <>
      <Tooltip title="Home">
        <NavLink to="/">
          <li>
            <AiOutlineHome className="navbar__icons" />
            <span></span>
            <h3>Home</h3>
          </li>
        </NavLink>
      </Tooltip>

      <Tooltip title="Friends">
        <NavLink to="/friends">
          <li>
            <IoPeopleOutline className="navbar__icons" />
            <span></span>
            <h3>Friends</h3>
          </li>
        </NavLink>
      </Tooltip>

      <Tooltip title="Videos">
        <NavLink to="/videos">
          <li>
            <BsCameraVideo className="navbar__icons" />
            <span></span>
            <h3>Videos</h3>
          </li>
        </NavLink>
      </Tooltip>

      <Tooltip title="Market Place">
        <NavLink to="/marketplace">
          <li>
            <BsShop className="navbar__icons" />
            <span></span>
            <h3>Market Place</h3>
          </li>
        </NavLink>
      </Tooltip>

      <Tooltip title="Groups">
        <NavLink to="/groups">
          <li>
            <MdOutlineGroups className="navbar__icons" />
            <span></span>
            <h3>Groups</h3>
          </li>
        </NavLink>
      </Tooltip>
    </>
  );
};

export default NavbarOptions;
