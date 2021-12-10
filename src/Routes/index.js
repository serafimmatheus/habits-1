import { Switch } from "react-router-dom";
import { Home } from "../Page/Home/index";
import Login from "../Page/Login/index";
import Register from "../Page/Register";
import { Dashboard } from "../Page/Dashboard";
import { Route } from "./Routes";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/login" component={Login} />

      <Route path="/register" component={Register} />

      <Route isPrivate path="/dashboard" component={Dashboard} />
    </Switch>
  );
};
