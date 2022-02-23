import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import { useHistory } from "react-router-dom";

function Routes() {
  const history = useHistory();

  function handleNavigation(path) {
    return history.push(path);
  }

  return (
    <Switch>
      <Route exact path="/">
        <Login handleNavigation={handleNavigation} />
      </Route>
      <Route path="/singup">
        <Singup handleNavigation={handleNavigation} />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default Routes;
