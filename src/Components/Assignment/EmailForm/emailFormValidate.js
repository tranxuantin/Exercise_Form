import * as yup from "yup"
import { setLocale } from "yup"

setLocale({ mixed: { required: (props) => `${props.path} khong duoc de trong` } })

const validation = yup.object().shape({
    emailEmailForm: yup.string().required().email(),
    titleEmailForm: yup.string().required().min(2).max(50),
    messageEmailForm: yup.string().required().min(10).max(500),
})

export default validation