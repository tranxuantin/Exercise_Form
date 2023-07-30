import * as yup from "yup";
import { setLocale } from "yup";

setLocale({
  mixed: { required: (props) => `truong ${props.path} khong duoc de trong` },
});

const validateInfo = (event) => yup.object().shape(event);

const validation = validateInfo({
  usernameContactForm: yup.string().required().min(2).max(9),
  emailContactForm: yup.string().required().email().min(2).min(8),
  phoneContactForm: yup.number().required().min(2),
});

export default validation;
