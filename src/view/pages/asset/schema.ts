import * as yup from 'yup';
import {formValidationMessages} from '../../../utils/validationMessages';

const schema = 
  yup.object({
    asset_name: yup.string().nullable()
    .required(formValidationMessages.required)
    .matches(/^[a-zA-Z0-9 ]+$/, formValidationMessages.alphaNumeric)
    .max(25, formValidationMessages.max(20)),
    asset_type: yup.string().nullable().required(formValidationMessages.required),
    cost: yup.string()
    .nullable()
    .required(formValidationMessages.required)
    .matches(/^\d+(\.\d+)?$/, formValidationMessages.onlyNumber('Cost'))
    .max(10, formValidationMessages.max(10)),
    quantity: yup.string()
    .nullable()
    .required(formValidationMessages.required)
    .matches(/^\d+(\.\d+)?$/, formValidationMessages.onlyNumber('Quantity'))
    .max(10, formValidationMessages.max(10)),
    asset_code: yup.string().nullable().required(formValidationMessages.required),
    details: yup.string().nullable().max(250, formValidationMessages.max(250)),
  });

export default schema;
