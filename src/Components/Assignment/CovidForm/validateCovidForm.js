import * as yup from "yup"
import { setLocale } from "yup"

setLocale({ mixed: { required: (props) => `${props.path} khong duoc de trong` } })

const validation = yup.object().shape({
    name: yup.string().required(),
    idCard: yup.number().required(),
    year: yup.number().required().moreThan(1900),
    nation: yup.string().required(),
    city: yup.string().required(),
    district: yup.string().required(),
    phuong: yup.string().required(),
    sonha: yup.string().required(),
    phone: yup.number().required().min(10),
    emailCovidForm: yup.string().required().email(),
    checkSymptom: yup.array().min(1),
    checkNear: yup.array().min(1),
})

export default validation