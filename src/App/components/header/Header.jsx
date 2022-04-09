import React from "react";

// icons
import { BsSearch } from "react-icons/bs";
import { CgMenuGridO } from "react-icons/cg";
import { BsMessenger } from "react-icons/bs";
import { RiNotification2Fill } from "react-icons/ri";
import { BsCaretDownFill } from "react-icons/bs";

// components/ elements
import NavbarOptions from "./NavbarOptions";

// style
import "../../styles/components/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__Left">
        <div className="header__logo">
          <img src="../images/logo.svg" />
        </div>
        <div className="header__search">
          <form>
            <BsSearch className="icon" />
            <input type="text" placeholder="Search Facebook" />
          </form>
        </div>
      </div>

      <nav className="header__navbar">
        <ul>
          <NavbarOptions />
        </ul>
      </nav>

      <div className="header__Right">
        <div className="headerRight__userProfile">
          <div className="userProfile__img">
            <img src="https://mui.com/static/images/avatar/1.jpg" />
          </div>

          <span>X</span>
        </div>

        <div className="headerRight__options">
          <span>
            <CgMenuGridO className="option__icon" />
          </span>

          <span>
            <BsMessenger className="option__icon" />
          </span>

          <span>
            <RiNotification2Fill className="option__icon" />
          </span>

          <span>
            <BsCaretDownFill className="option__icon" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
