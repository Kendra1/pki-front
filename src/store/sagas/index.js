import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN } from '../actions/ActionTypes';
import { userLogin } from './AuthSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin)
  ]);
}