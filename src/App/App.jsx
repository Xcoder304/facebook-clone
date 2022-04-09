import React from "react";
// components
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Routes";

// styles
import "./styles/app.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="app__body">
          <AllRoutes />
        </div>
      </div>
    </Router>
  );
};

export default App;
