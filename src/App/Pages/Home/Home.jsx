import React from "react";
import Sidebar from "./Sidebar";

// style
import "../../styles/Home.css";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="home">
        <h1>this is home</h1>
      </div>
    </>
  );
};

export default Home;
