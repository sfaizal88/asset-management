/**
 * Login Validation schema for asset form
 * @author - Faizal 
 * @date - 23rd June 2024
 */
// GENERIC IMPORT
import * as yup from 'yup';

// UTILS IMPORT
import {formValidationMessages} from '../../../utils/validationMessages';

const schema = 
  yup.object({
    username: yup.string().nullable().required(formValidationMessages.required),
    password: yup.string().nullable().required(formValidationMessages.required),
  });

export default schema;
