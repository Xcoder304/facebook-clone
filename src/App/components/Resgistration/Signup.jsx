import React from "react";
import { IoCloseOutline } from "react-icons/io5";

import "../../styles/components/signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup__wapper">
        <div className="signupwapper__top">
          <span>
            <h2>sign up</h2>
            <p>it's quick and easy.</p>
          </span>

          <div className="wapper__closeBtn">
            <IoCloseOutline className="icon" />
          </div>
        </div>

        <div className="wapper__body">
          <form>
            <input type="text" placeholder="Enter Name" required />
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="New password" required />

            <button type="submit" className="wapper__SignUpbtn">
              sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
