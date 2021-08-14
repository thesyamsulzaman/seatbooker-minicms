import {
  USER_LOGIN,
  USER_LOADED,
  USER_LOGOUT,
  USER_LOAD_FAILED,
} from "../constants/users";

export const login = (userId, token) => {
  return {
    type: USER_LOGIN,
    payload: { userId, token },
  };
};

export const logout = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const loadUser = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  if (!token) {
    return {
      type: USER_LOAD_FAILED,
    };
  }

  return {
    type: USER_LOADED,
    payload: { userId: "USR001", token },
  };
};
