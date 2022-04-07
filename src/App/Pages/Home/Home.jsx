import React from "react";

// components/ Elements
import Sidebar from "./Sidebar";
import Storys from "./Storys";
// style
import "../../styles/Home.css";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="home">
        <Storys />
      </div>
    </>
  );
};

export default Home;
