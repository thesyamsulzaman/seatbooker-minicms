import {
  USER_LOGIN,
  USER_LOADED,
  USER_LOGOUT,
  USER_LOAD_FAILED,
} from "../constants/users";

const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  userId: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOADED:
    case USER_LOGIN:
      const { userId, token } = action.payload;
      localStorage.setItem("token", JSON.stringify(token));
      return {
        ...state,
        isAuthenticated: true,
        userId,
        token,
      };

    case USER_LOGOUT:
    case USER_LOAD_FAILED:
      localStorage.removeItem("token");
      return { isAuthenticated: false, userId: null, token: null };

    default:
      return state;
  }
};
