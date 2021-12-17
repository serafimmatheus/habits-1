import { Switch } from "react-router-dom";
import { Home } from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import { Route } from "./Routes";
import Groups from "../Pages/Groups";
import Activities from "../Page/Activities/index";
import Goals from "../Page/Goals";
import Habits from "../Pages/Habits";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={Login} />

      <Route exact path="/register" component={Register} />

      <Route isPrivate exact path="/dashboard" component={Habits} />

      <Route isPrivate exact path="/dashboard/groups" component={Groups} />

      <Route
        isPrivate
        exact
        path="/dashboard/:group_id/activities"
        component={Activities}
      />
      <Route isPrivate exact path="/dashboard/goal" component={Goals} />
    </Switch>
  );
};
