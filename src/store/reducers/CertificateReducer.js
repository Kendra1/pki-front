import { SET_CERTIFICATES, SET_ADDED_CERTIFICATE } from '../actions/ActionTypes';

const initialState = {
  all: []
}

const certReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CERTIFICATES:

      return { ...state, all: action.payload }
    default:
      return state;
    case SET_ADDED_CERTIFICATE:
      return { ...state, all: [...state.all, action.payload]}
  }
};

export default certReducer;