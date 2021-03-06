import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { getCertificates, revokeCertificate } from '../../store/actions/CertificateActions'

const useStyles = makeStyles({
    table: {
      minWidth: 650
    },
  });
  

function CertificatesTable(props) {
    const classes = useStyles();

    useEffect(() => {
        props.getCertificates();
    },[])

    useEffect(() => {
        if (props.data.length > 0) {
            const cert = props.data[0]

            for (const property in cert) {
                console.log(`${property}: ${cert[property]}`);
              }
        }
    },[props.data])

    return (
        <TableContainer component={Paper} elevation={3}
        style={{margin: 'auto',
            width: '80%',
            padding: '10px'}} >
        <Table className={classes.table}aria-label="simple table">
          <TableHead>
            {props.data.length > 0 && (
              <TableRow>
                {Object.keys(props.data[0]).map((key) => <TableCell align="left">{key}</TableCell>)}
              </TableRow>)
            }
          </TableHead>
          <TableBody>
            {props.data.map((cert, index) => (
              <TableRow key={index}>
                {Object.values(cert).map((value) => <TableCell align="right">{value}</TableCell>)}
                <TableCell align="left">
                    <Button variant="contained" color="secondary" onClick={() => props.revokeCertificate(cert.serialNumber)}>
                        Revoke
                    </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}


const mapStateToProps = state => {
    return {
      data: state.certificate.all,
    };
};
  
  
const mapDispatchToProps = {
    getCertificates, revokeCertificate
};
   
export default withRouter(
    connect(
    mapStateToProps,
    mapDispatchToProps
    )(CertificatesTable)
);