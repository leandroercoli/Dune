import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { ROUTES, isRouteValid } from "utils/constants";
import { useAuth } from "./useAuth";

export const useRouting = () => {
  const history = useHistory();
  const {
    loggedUser: { token, user, isError },
  } = useAuth();
  let { pathname } = useLocation();

  useEffect(() => {
    if (
      !isRouteValid(pathname) ||
      (pathname === "/login" && !isError && token && user?.username)
    )
      history.push("/");
  }, [history, isError, pathname, token, user?.username]);

  return {
    routes: ROUTES,
    pathname,
  };
};
