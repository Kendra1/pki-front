import ApiService from './ApiService';

const ENDPOINTS = {
  POST_CERTIFICATE: '/certificates/issue',
  REVOKE: '/certificates/revoke/:id',
  GET_CERTIFICATES: '/certificates'
};

class CertService extends ApiService {

    getCertificates = async () => {
        const { data } = await this.apiClient.get(ENDPOINTS.GET_CERTIFICATES)

        return data;
    }

    postCertificate = async (payload) => {
        const { data } = await this.apiClient.post(ENDPOINTS.POST_CERTIFICATE, payload);
        return data;
    }

    revokeCertificate = async (id) => {
        const { data } = await this.apiClient.delete(ENDPOINTS.REVOKE.replace(":id", id));

        return data;
    }

}

const certService = new CertService()
export default certService