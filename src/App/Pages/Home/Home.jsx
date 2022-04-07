import React from "react";

// components/ Elements
import Sidebar from "./Sidebar";
import Storys from "./Storys";
import Post from "./post/Post";

// style
import "../../styles/Home.css";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="home">
        <Storys />
        <Post />
      </div>
    </>
  );
};

export default Home;
