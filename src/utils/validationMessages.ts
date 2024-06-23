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
    alphaNumeric: 'Asset name can only contain letters, numbers, and spaces',
    onlyNumber: (name: string) => `${name} must be a valid number`,
    max: (val: number) => `Ensure this field has no more than ${val} characters`,
};