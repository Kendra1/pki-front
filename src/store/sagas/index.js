import { all, takeLatest } from 'redux-saga/effects';
import { LOGIN, GET_CERTIFICATES, REVOKE_CERTIFICATE, ADD_CERTIFICATE } from '../actions/ActionTypes';
import { userLogin } from './AuthSagas';
import { certificatesGet, certificatePost, certificateRevoke } from './CertificateSagas';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN, userLogin),
    takeLatest(GET_CERTIFICATES, certificatesGet),
    takeLatest(REVOKE_CERTIFICATE, certificateRevoke),
    takeLatest(ADD_CERTIFICATE, certificatePost)
  ]);
}