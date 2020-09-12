import { SET_CERTIFICATES, SET_ADDED_CERTIFICATE } from '../actions/ActionTypes';
import CertService from '../../services/CertService';

const initialState = {
  all: []
}

const certReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CERTIFICATES:

      return { ...state, all: action.payload }
    default:
      return state;
  }
};

export default certReducer;