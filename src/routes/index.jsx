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
          session={session}
          setSession={setSession}
        />
      </Route>
      <Route path="/singup">
        <Singup handleNavigation={handleNavigation} />
      </Route>
      <Route path="/dashboard">
        <Dashboard session={session} />
      </Route>
    </Switch>
  );
}

export default Routes;
