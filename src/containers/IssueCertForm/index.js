import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Formik, Form, Field } from "formik";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { addCertificate } from "../../store/actions/CertificateActions";
import { formStyle, submitButton, paper } from "../../assets/jss/FormStyle";
import { withFormikField } from "../../utils/withFormikField";
import ccodes from "./ccodes";

const FormikTextField = withFormikField(TextField);

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
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
  { key: "decipherOnly", text: "Decipher only", value: false },
];
const EXT_KEY_USAGE = [
  { key: "serverAuth", text: "TLS Web server authentication", value: false },
  { key: "clientAuth", text: "TLS Web client authentication", value: false },
  { key: "codeSigning", text: "Sign executable code", value: false },
  { key: "emailProtection", text: "Email protection", value: false },
  { key: "timeStamping", text: "Timestamping", value: false },
  { key: "ocspSigning", text: "OCSP signing", value: false },
  { key: "anyExtendedKeyUsage", text: "Any extended usage", value: false },
];

const KEYS_USAGE = [
  "digitalSignature",
  "contentCommitment",
  "keyEncipherment",
  "dataEncipherment",
  "keyAgreement",
  "keyCertSign",
  "crlSign",
  "encipherOnly",
  "decipherOnly",
];

const EXT_KEYS_USAGE = [
  "serverAuth",
  "clientAuth",
  "codeSigning",
  "emailProtection",
  "timeStamping",
  "ocspSigning",
  "anyExtendedKeyUsage",
];

const transformValues = (values) => {
  console.log("INITIAL: ", values);
  let newValues = { subject: {} };
  let keysUsage = [];
  let extKeysUsage = [];
  Object.keys(values).map((value) => {
    if (KEYS_USAGE.includes(value)) {
      keysUsage.push(value);
    } else if (EXT_KEYS_USAGE.includes(value)) {
      extKeysUsage.push(value);
    } else {
      if (value !== "certificationAuthority" && value !== "generateKeys") {
        newValues["subject"][value] = values[`${value}`];
      }
    }
  });

  if (Object.keys(values).includes("certificationAuthority")) {
    if (values["certificationAuthority"] == false) {
      newValues["certificationAuthority"] = false;
    } else {
      newValues["certificationAuthority"] = true;
    }
  } else {
    newValues["certificationAuthority"] = false;
  }

  if (Object.keys(values).includes("generateKeys")) {
    if (values["generateKeys"] == false) {
      newValues["generateKeys"] = false;
    } else {
      newValues["generateKeys"] = true;
    }
  } else {
    newValues["generateKeys"] = false;
  }

  if (keysUsage.length) {
    newValues["keyUsage"] = keysUsage;
  }
  if (extKeysUsage.length) {
    newValues["extKeyUsage"] = extKeysUsage;
  }

  return newValues;
};

function IssueCertForm(props) {
  const classes = useStyles();

  const submit = (values) => {
    const transformedValues = transformValues(values);
    props.addCertificate(transformedValues);
    console.log("NEW VALUES", transformedValues);
  };

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <Formik
        initialValues={{
          commonName: "",
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
            <div style={{ overflow: "scroll" }}>
              {KEY_USAGE.map((key) => (
                <Grid item xs={12}>
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
                </Grid>
              ))}
              <h3>EXT Key Usage</h3>
              {EXT_KEY_USAGE.map((key) => (
                <Grid item xs={12}>
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
                </Grid>
              ))}
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
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  addCertificate,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(IssueCertForm)
);
