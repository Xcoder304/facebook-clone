import React from "react";
// components
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import "./styles/app.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Routes>
            <Route path="/" element={<h1>hello this is Home</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
