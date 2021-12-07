import { Route, Switch } from "react-router-dom";

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
        //Dashboard
      </Route>
    </Switch>
  );
};
