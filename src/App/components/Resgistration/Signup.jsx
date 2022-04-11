import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Loading from "../Loading";

import "../../styles/components/signup.css";

const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [laoding, setloading] = useState(false);

  const navigate = useNavigate();

  const SignUpTheUser = async (e) => {
    e.preventDefault();
    setloading(true);
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    setloading(false);
    navigate("/");
  };

  return (
    <>
      {laoding && <Loading />}
      <div className="signup">
        <div className="signup__wapper">
          <div className="signupwapper__top">
            <span>
              <h2>sign up</h2>
              <p>it's quick and easy.</p>
            </span>

            <div className="wapper__closeBtn" onClick={() => navigate("/")}>
              <IoCloseOutline className="icon" />
            </div>
          </div>

          <div className="wapper__body">
            <form onSubmit={SignUpTheUser}>
              <input
                type="text"
                placeholder="Enter Name"
                required
                onChange={(e) => setusername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email address"
                required
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                type="password"
                placeholder="New password"
                required
                onChange={(e) => setpassword(e.target.value)}
              />

              <button type="submit" className="wapper__SignUpbtn">
                sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
