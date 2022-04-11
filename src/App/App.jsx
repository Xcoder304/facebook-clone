import { useEffect, useState } from "react";
// components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllRoutes from "./Routes";
import { ContextVal } from "./context/Context";
import Login from "./components/Resgistration/Login";
import Signup from "./components/Resgistration/Signup";
import { auth } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import Loading from "./components/Loading";

// styles
import "./styles/app.css";

const App = () => {
  const [{ user, OpenSideBar }, dispatch] = ContextVal();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (authUser) => {
      setloading(true);
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
      setloading(false);
    });

    return () => unsub();
  }, []);

  return (
    <>
      <Router>
        <div className="app">
          {loading && <Loading />}
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
    </>
  );
};

export default App;
