import { LOGIN, AUTH_USER, LOGIN_ERROR, SET_ROLE } from './ActionTypes';

export const logIn = logInData => {
  return {
    type: LOGIN,
    payload: logInData
  };
};

export const authUser = payload => {
  return {
    type: AUTH_USER,
    payload
  };
};

export const setRole = payload => {
  return {
    type: SET_ROLE,
    payload
  }
}

export const loginError = payload => {
  return {
    type: LOGIN_ERROR,
    payload
  };
};