import React from "react";

import Avatar from "@mui/material/Avatar";

import "../../../styles/post/comments.css";

const CommentsSec = () => {
  return (
    <div className="comments">
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
