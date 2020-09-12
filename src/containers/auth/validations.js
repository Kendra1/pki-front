import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Email address is required')
    .max(255),
  password: Yup.string().required().min(6)
});