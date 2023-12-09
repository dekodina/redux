import * as user from "../../api/user";

const USER_KEY = "user";

export const signIn = (email, password) => async (dispatch) => {
  user
    .loginUser(email, password)
    .then((user) => {
      dispatch({ type: "USER/SET", payload: user });
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    })
    .catch(() => {
      dispatch({ type: "USER/SET", payload: null });
      localStorage.removeItem(USER_KEY);
    });
};

export const signUp = (email, password) => async (dispatch) => {
  user
    .registerUser(email, password)
    .then((user) => {
      dispatch({ type: "USER/SET", payload: user });
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    })
    .catch(() => {
      dispatch({ type: "USER/SET", payload: null });
      localStorage.removeItem(USER_KEY);
    });
};

export const signOut = () => (dispatch) => {
  dispatch({ type: "USER/SET", payload: null });
  localStorage.removeItem(USER_KEY);
};
