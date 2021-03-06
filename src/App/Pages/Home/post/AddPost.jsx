import React from "react";

import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { ContextVal } from "../../../context/Context";

import "../../../styles/post/addpost.css";

const AddPost = () => {
  const [{ user }, dispatch] = ContextVal();
  const navigate = useNavigate();

  return (
    <div className="addPost">
      <div className="addPost__top">
        <div className="addPost__userProfile">
          <Avatar alt="Remy Sharp" src={user?.photoURL}></Avatar>
        </div>

        <span onClick={() => navigate("/createpost")}>
          {`What's on your mind, ${user?.displayName}?`}
        </span>
      </div>

      <div className="addPost__options">
        <div className="options__option">
          <div className="option__img">
            <img src="../images/livevideo.png" />
          </div>
          <h4>live video</h4>
        </div>

        <div
          className="options__option"
          onClick={() => navigate("/createpost")}
        >
          <div className="option__img">
            <img src="../images/photos.png" />
          </div>
          <h4>photos/videos</h4>
        </div>

        <div className="options__option">
          <div className="option__img">
            <img src="../images/happy.png" />
          </div>
          <h4>feeling/activity</h4>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
