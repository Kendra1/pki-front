import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getCertificates } from '../../store/actions/CertificateActions'

function CertificatesTable(props) {

    useEffect(() => {
        props.getCertificates();
    },[])

    return (
        <div>
            lista hehe {props.data.length}
        </div>
    )
}


const mapStateToProps = state => {
    return {
      data: state.certificate.all 
    };
};
  
  
const mapDispatchToProps = {
    getCertificates
};
   
export default withRouter(
    connect(
    mapStateToProps,
    mapDispatchToProps
    )(CertificatesTable)
);