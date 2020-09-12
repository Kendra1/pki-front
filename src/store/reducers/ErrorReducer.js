import { LOGIN_ERROR } from '../actions/ActionTypes';

const initialState = {
  loginError: false
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:

      return { ...state, loginError: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
