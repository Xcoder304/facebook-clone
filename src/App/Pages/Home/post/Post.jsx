import React from "react";

// components/Elements
import AddPost from "./AddPost";
import PostCard from "./PostCard";

// styles
import "../../../styles/post.css";

const Post = () => {
  return (
    <div className="post">
      <AddPost />
      <PostCard />
    </div>
  );
};

export default Post;
