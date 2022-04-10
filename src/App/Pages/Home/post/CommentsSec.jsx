import React from "react";

import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { ContextVal } from "../../../context/Context";
import { db } from "../../../firebase/config";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

import "../../../styles/post/comments.css";

const CommentsSec = () => {
  const [{ user }, dispatch] = ContextVal();

  return (
    <div className="comments">
      <div className="add__comment">
        <form>
          <Avatar
            alt="Remy Sharp"
            src={user.photoURL}
            className="userProfile"
          ></Avatar>
          <input type="text" placeholder="Write a comment..." />
          <Button variant="contained" size="small" className="add__comment-btn">
            Post
          </Button>
        </form>
      </div>

      <div className="comments__comment">
        <Avatar alt="Remy Sharp" src="/broken-image.jpg"></Avatar>
        <div className="comment__text">
          <h4>x hunter</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default CommentsSec;
