import { GET_CERTIFICATES, SET_CERTIFICATES, ADD_CERTIFICATE, SET_ADDED_CERTIFICATE, REVOKE_CERTIFICATE, SET_REVOKED_CERTIFICATE } from './ActionTypes';

export const getCertificates = () => {
  return {
    type: GET_CERTIFICATES,
  };
};

export const setCertificates = payload => {
  return {
    type: SET_CERTIFICATES,
    payload
  };
};

export const addCertificate = payload => {
  return {
    type: ADD_CERTIFICATE,
    payload
  }
}

export const setAddedCertificate = payload => {
  return {
    type: SET_ADDED_CERTIFICATE,
    payload
  };
};

export const revokeCertificate = payload => {
    return {
      type: REVOKE_CERTIFICATE,
      payload
    };
};

export const setRevokedCertificate = payload => {
    return {
        type: SET_REVOKED_CERTIFICATE,
        payload
    };
};