import { Route, Switch } from "react-router-dom";
import { Home } from "../Page/Home/index";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        Login
      </Route>

      <Route exact path="/cadastro">
        Register
      </Route>

      <Route exact path="/dashboard">
        Dashboard
      </Route>
    </Switch>
  );
};
