/**
 * 
 * Validation messager
 * @author - Faizal 
 * @date - 20th June 2024
 * 
 */
// GENERIC FE MESSAGE
export const formValidationMessages = {
    error:  'Something went wrong, please try again after sometime.',
    success:  'Data has been saved successfully!',
    assetCreated:  'New asset created successfully!',
    assetUpdated:  'Asset updated successfully!',
    assetRemoved:  'Asset removed successfully!',
    required:  'This field is required',
    invalidURL:  'Invalid website url',
    max: (val: number) => `Ensure this field has no more than ${val} characters`,
    alphanumeric:  'This should be an alphanumeric value',
    email:  'Invalid email address',
    dateFormat:  'Please input the date in DD/MM/YYYY format',
    duplicate:  'Duplicate record exists.',
    invalidDate:  'Invalid date format',
    invalidFormat:  'Invalid format',
    deletedSuccess:  'Deleted Successfully',
    cancelledSuccess:  'Cancelled Successfully',
    retrievedSuccess:  'Retrieved Successfully',
};