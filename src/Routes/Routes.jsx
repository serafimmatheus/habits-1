import { Redirect, Route as ReactDomRoute } from "react-router-dom";

export const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const token = localStorage.getItem("@Habits:token");

  return (
    <ReactDomRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : "/dashboard"} />
        );
      }}
    />
  );
};
