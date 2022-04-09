import React from "react";

// components/ Elements
import Header from "./components/header/Header";
import Home from "./Pages/Home/Home";
import CreatePost from "./Pages/Home/post/CreatePost";
import Login from "./components/Resgistration/Login";
import Signup from "./components/Resgistration/Signup";

import { Routes, Route } from "react-router-dom";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/signup"
        element={
          <>
            <Login />
            <Signup />
          </>
        }
      />

      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
          </>
        }
      />

      <Route path="/friends" element={<Header />} />

      <Route path="/marketplace" element={<Header />} />

      <Route path="/videos" element={<Header />} />

      <Route path="/groups" element={<Header />} />

      <Route
        path="/createpost"
        element={
          <>
            <Header />
            <Home />
            <CreatePost />
          </>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
