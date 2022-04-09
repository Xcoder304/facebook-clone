import React from "react";
// components
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import CreatePost from "./Pages/Home/post/CreatePost";

// styles
import "./styles/app.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/createpost"
              element={
                <>
                  <Home />
                  <CreatePost />
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
