/**
 * Add / Edit asset Validation schema for asset form
 * @author - Faizal 
 * @date - 23rd June 2024
 */
// GENERIC IMPORT
import * as yup from 'yup';

// UTILS IMPORT
import {formValidationMessages} from '../../../utils/validationMessages';
import {AssetEnum} from '../../../utils/enum';

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
    asset_code: yup.string().when('asset_type', {
      is: (value: AssetEnum) => value !== AssetEnum.PROPERTY,
      then: yup.string().nullable().required(formValidationMessages.required),
      otherwise: yup.string().nullable()
    }),
    details: yup.string().nullable().max(250, formValidationMessages.max(250)),
  });

export default schema;
