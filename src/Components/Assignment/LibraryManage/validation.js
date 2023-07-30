import * as yup from "yup";
import { setLocale } from "yup";

setLocale({
    mixed: { required: (props) => `truong ${props.path} khong duoc de trong` },
});

const validateInfo = (event) => yup.object().shape(event);

const validation = validateInfo({
    title: yup.string().required().min(2).max(9),
    number: yup.number().required().integer().positive(),
});

export default validation;