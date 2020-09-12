import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { addCertificate, setAddedCertificate } from '../../store/actions/CertificateActions';
import { formStyle, submitButton, paper } from '../../assets/jss/FormStyle';
import { withFormikField } from '../../utils/withFormikField';

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

function IssueCertForm(props) {
    const classes = useStyles();
    const [createdAt, setCreatedAt] = React.useState('')

    const submit = (values) => {
        values['createdAt'] = createdAt
        props.addCertificate(values);
        console.log('ovdee', values)
      };
    
    return (
        <div style={{width: '60%', margin: 'auto',}}>
        <Formik
            initialValues={{
                commonName: '',
                issuer: '',
                serialNumber: '',
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
                        <TextField
                            id="createdAt"
                            label="Created at"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            className={classes.textField}
                            onChange={event => setCreatedAt(event.target.value)}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            component={FormikTextField}
                            type="text"
                            name="issuer"
                            variant="outlined"
                            required
                            fullWidth
                            label="Issuer"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            component={FormikTextField}
                            type="text"
                            name="serialNumber"
                            variant="outlined"
                            required
                            fullWidth
                            label="Serial number"
                        />
                    </Grid>
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