import { call, put } from 'redux-saga/effects';
import { push, go } from 'connected-react-router';
import jwt_decode from 'jwt-decode'

import { authUser, loginError, setRole } from '../actions/AuthActions';
import AuthService from '../../services/AuthService'
import { DASHBOARD, LOGIN } from '../../routes'


export function* userLogin({ payload }) {
  try {
    const response = yield call(AuthService.login, payload)
    const decoded = jwt_decode(response.access)
    yield put(setRole(decoded.role))
    yield put(authUser(true))
  } catch (error) {
    yield put(loginError(true))
  }
}