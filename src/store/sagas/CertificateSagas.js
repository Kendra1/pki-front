import { call, put } from 'redux-saga/effects';
import certService from '../../services/CertService';
import { setAddedCertificate, setCertificates, setRevokedCertificate } from '../actions/CertificateActions';

export function* certificatesGet(action) {
    try {
        const response = yield call(() => certService.getCertificates())
        yield put(setCertificates(response));
    } catch (error) {
        console.log(error);
    }
}

export function* certificatePost(action) {
    console.log("poost saga", action.payload)
    try {
        const resp = yield call(() => certService.postCertificate(action.payload));
        yield put(setAddedCertificate(resp));
    } catch (error) {
        console.log(error);
    }
}

export function* certificateRevoke(action) {
    try {
        const resp = yield call(() => certService.revokeCertificate(action.payload));
        yield put(setRevokedCertificate(resp));
    } catch (error) {
        console.log(error)
    }
}