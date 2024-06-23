import * as yup from 'yup';
import {formValidationMessages} from '../../../utils/validationMessages';

const schema = 
  yup.object({
    username: yup.string().nullable().required(formValidationMessages.required),
    password: yup.string().nullable().required(formValidationMessages.required),
  });

export default schema;
