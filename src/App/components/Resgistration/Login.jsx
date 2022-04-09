import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { ContextVal } from "../../context/Context";

// styles
import "../../styles/components/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [{ user }, dispatch] = ContextVal();

  const LoginTheUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err.message);
    }
  };

  const LoginWithgoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch({
          type: "LOGIN__THE__USER__WITH__GOOGLE",
          user: res,
        });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__info">
        <h1>facebook</h1>
        <span>
          Facebook helps you connect and share with the people in your life.
        </span>
      </div>
      <div className="login__wapper">
        <form onSubmit={LoginTheUser}>
          <input
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />

          <button type="submit" className="login__btn">
            log in
          </button>

          <button
            type="button"
            className="login__btn"
            onClick={LoginWithgoogle}
          >
            log in with google
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
