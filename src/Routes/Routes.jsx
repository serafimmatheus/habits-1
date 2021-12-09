import { Route, Switch } from "react-router-dom";
import Goals from "../Page/Goals";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>

      <Route exact path="/login"></Route>

      <Route exact path="/register"></Route>

      <Route exact path="/dashboard">
        <Goals />
      </Route>
    </Switch>
  );
};
