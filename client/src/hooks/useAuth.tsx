import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useGetUserQuery } from "store/api/api";
import { useLoginMutation } from "store/auth/authApi";
import {
  selectToken,
  logout as handleLogout,
  selectUserId,
} from "store/auth/authSlice";

export const useAuth = () => {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const userid = useSelector(selectUserId);

  // automatically handles logout once the token and userid are removed from redux
  useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("userid", userid);
  }, [token, userid]);

  const {
    data: userData,
    isLoading: isLoadingLoggedUser,
    error,
    isError,
  } = useGetUserQuery(userid ?? "", {
    skip: !userid,
  });

  const [login, { isError: isLoginRejected, isSuccess: isLoginSuccessful }] =
    useLoginMutation();

  useEffect(() => {
    if (isLoginSuccessful) {
      push("/");
    }
  }, [isLoginSuccessful, push]);

  const logout = () => {
    dispatch(handleLogout());
    push("/");
  };

  return {
    loggedUser: useMemo(
      () => ({
        token,
        user: userData?.user,
        isLoading: isLoadingLoggedUser,
        error,
        isError,
      }),
      [token, userData, isLoadingLoggedUser, isError, error]
    ),
    tryLogin: { login, isLoginRejected, isLoginSuccessful },
    logout,
  };
};
