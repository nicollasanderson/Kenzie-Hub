import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Routes() {
  const history = useHistory();

  const [session, setSession] = useState(false);
  //const [dataResponse, setDataResponse] = useState([]);
  const [userId, setUserId] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@kenziehub:token");

    if (token) {
      return setSession(true);
    }
  }, []);

  function handleNavigation(path) {
    return history.push(path);
  }

  return (
    <Switch>
      <Route exact path="/">
        <Login
          handleNavigation={handleNavigation}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          session={session}
          setSession={setSession}
          setUserId={setUserId}
          // setDataResponse={setDataResponse}
        />
      </Route>
      <Route path="/singup">
        <Singup
          handleNavigation={handleNavigation}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          session={session}
          setUserId={setUserId}
          userId={userId}
          setSession={setSession}
        />
      </Route>
    </Switch>
  );
}

export default Routes;
