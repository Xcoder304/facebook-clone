import { useEffect } from "react";
// components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllRoutes from "./Routes";
import { ContextVal } from "./context/Context";
import Login from "./components/Resgistration/Login";
import Signup from "./components/Resgistration/Signup";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";

// styles
import "./styles/app.css";

const App = () => {
  const [{ user }, dispatch] = ContextVal();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch({
          type: "SET__USER__WITH__EMAILPASSWORD",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET__USER__WITH__EMAILPASSWORD",
          user: null,
        });
      }
    });

    return () => unsub();
  }, []);

  console.log(user);

  return (
    <Router>
      <div className="app">
        <div className="app__body">
          {user ? (
            <AllRoutes />
          ) : (
            <>
              <Login />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
