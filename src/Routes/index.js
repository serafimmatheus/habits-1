import { Switch } from "react-router-dom";
import { Home } from "../Page/Home/index";
import Login from "../Page/Login/index";

import { Route } from "./Routes";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/login" component={Login} />

      <Route path="/cadastro" component={"Cadastro"} />

      <Route isPrivate path="/dashboard" component={"dashboard"} />
    </Switch>
  );
};
