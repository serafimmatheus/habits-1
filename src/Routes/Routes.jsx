import { Route, Switch } from "react-router-dom";
import Dashboard from "../Page/Dashboard";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        //Home
      </Route>

      <Route exact path="/login">
        //Login
      </Route>

      <Route exact path="/register">
        //Register
      </Route>

      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};
