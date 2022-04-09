import React from "react";

// components / Elmenets
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

// icons
import { IoMdClose } from "react-icons/io";

import "../../../styles/post/createpost.css";

const CreatePost = () => {
  const navigate = useNavigate();

  return (
    <div className="createPost">
      <div className="createPost__wapper">
        <div className="wapper__top">
          <h3>create post</h3>
          <div className="wappper__closeBtn" onClick={() => navigate(-1)}>
            <IoMdClose className="icon" />
          </div>
        </div>

        <div className="wapper__userProfile">
          <Avatar alt="Remy Sharp" src="/broken-image.jpg"></Avatar>
          <h4>x hunter</h4>
        </div>

        <div className="wapper__input">
          <input type="text" placeholder="What's on your mind, X?" />
        </div>

        <div className="wapper__buttons">
          <div className="wapper__button">
            <label htmlFor="file" className="photos__btn">
              upload photos
            </label>
            <input
              type="file"
              style={{ visibility: "hidden" }}
              id="file"
              accept="image/x-png,image/gif,image/jpeg"
            />
          </div>

          <div className="wapper__button">
            <label htmlFor="file2" className="video__btn">
              upload videos
            </label>
            <input
              type="file"
              style={{ visibility: "hidden" }}
              id="file2"
              accept="video/mp4,video/x-m4v,video/*"
            />
          </div>
        </div>

        <div className="wapper__postBtn">
          <button>post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
