import React from "react";

import { useNavigate } from "react-router-dom";

// styles
import "../../styles/components/login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login__info">
        <h1>facebook</h1>
        <span>
          Facebook helps you connect and share with the people in your life.
        </span>
      </div>
      <div className="login__wapper">
        <form>
          <input type="email" required placeholder="Email address" />
          <input type="password" required placeholder="Password" />
          <button type="submit" className="login__btn">
            log in
          </button>
        </form>

        <div className="login__createAccout">
          <button onClick={() => navigate("/signup")}>
            create new account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
