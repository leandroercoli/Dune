import { FullScreenLoader } from "components/loader";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function PrivateRoute({ children, ...rest }: RouteProps) {
  const {
    loggedUser: { token, user, isLoading, isError },
  } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoading ? (
          <FullScreenLoader />
        ) : !isError && token && user?.username ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
