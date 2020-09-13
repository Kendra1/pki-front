import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { addCertificate } from '../../store/actions/CertificateActions';
import { formStyle, submitButton, paper } from '../../assets/jss/FormStyle';
import { withFormikField } from '../../utils/withFormikField';
import ccodes from './ccodes';

const FormikTextField = withFormikField(TextField);

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const KEY_USAGE = [
    { key: "digitalSignature", text: "Digital signature", value: false },
    { key: "contentCommitment", text: "Non-repudiation", value: false },
    { key: "keyEncipherment", text: "Key encipherment", value: false },
    { key: "dataEncipherment", text: "Data encipherment", value: false },
    { key: "keyAgreement", text: "Key agreement", value: false },
    { key: "keyCertSign", text: "Certificate signing", value: false },
    { key: "crlSign", text: "CRL signing", value: false },
    { key: "encipherOnly", text: "Encipher only", value: false },
    { key: "decipherOnly", text: "Decipher only", value: false }
  ];
  const EXT_KEY_USAGE = [
    { key: "serverAuth", text: "TLS Web server authentication", value: false },
    { key: "clientAuth", text: "TLS Web client authentication", value: false },
    { key: "codeSigning", text: "Sign executable code", value: false },
    { key: "emailProtection", text: "Email protection", value: false },
    { key: "timeStamping", text: "Timestamping", value: false },
    { key: "ocspSigning", text: "OCSP signing", value: false },
    { key: "anyExtendedKeyUsage", text: "Any extended usage", value: false }
  ];

function IssueCertForm(props) {
    const classes = useStyles();

    const submit = (values) => {
        props.addCertificate(values);
        console.log('ovdee', values)
      };

    // const onCheckKey = (e) => {console.log(e.target.value); KEY_USAGE.find(item => item.key === e.target.name).value = e.target.value }
    // const onCheckExtKey = (e) => {console.log(e.target.value); EXT_KEY_USAGE.find(item => item.key === e.target.name).value = e.target.value }

    return (
        <div style={{width: '60%', margin: 'auto',}}>
        <Formik
            initialValues={{
                commonName: '',
            }}
            onSubmit={submit}
            style={formStyle}
        >
            <Form>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Field
                            component={FormikTextField}
                            type="text"
                            name="commonName"
                            variant="outlined"
                            required
                            fullWidth
                            label="Common name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            component={FormikTextField}
                            type="checkbox"
                            name="generateKeys"
                            variant="outlined"
                            fullWidth
                            label="Generate Keys"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            component={FormikTextField}
                            type="checkbox"
                            name="certificationAuthority"
                            variant="outlined"
                            
                            fullWidth
                            label="Certification Authority"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Field
                            component={FormikTextField}
                            type="text"
                            name="ogranization"
                            variant="outlined"
                            required
                            fullWidth
                            label="Organization"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            component={FormikTextField}
                            type="text"
                            name="organizationalUnit"
                            variant="outlined"
                            required
                            fullWidth
                            label="Organizational Unit"
                        />
                    </Grid>
                    <h3>Key usage:</h3>
                    <div style={{overflow: 'scroll'}}>
                    {KEY_USAGE.map( key => (<Grid item xs={12}>
                        <Field
                            id={key.text}
                            component={FormikTextField}
                            type="checkbox"
                            name={key.key}
                            variant="outlined"
                            defaultValue={false}
                            value={key.value}
                            label={key.text}
                            // onChange={onCheckExtKey}

                        />
                    </Grid>))}
                    <h3>EXT Key Usage</h3>
                    {EXT_KEY_USAGE.map( key => (<Grid item xs={12}>
                        <Field
                            id={key.text}
                            component={FormikTextField}
                            type="checkbox"
                            name={key.key}
                            variant="outlined"
                            defaultValue={false}
                            value={key.value}
                            label={key.text}
                            // onChange={onCheckKey}
                        />
                    </Grid>))}
                    </div>
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={submitButton}
                >
                    Done
                </Button>
            </Form>
        </Formik>
        </div>
    )
}


const mapStateToProps = state => {
    return {

    };
};
  
  
const mapDispatchToProps = {
    addCertificate
};
   
export default withRouter(
    connect(
    mapStateToProps,
    mapDispatchToProps
    )(IssueCertForm)
);