/**
 * Utils component
 * @author - Faizal 
 * @date - 19th June 2024
*/
export const convertToCurrency = (val: string | number) => {
    // Convert the string to a number
    const number = Number(val);
    // Check if the conversion is successful (number is not NaN)
    if (isNaN(number)) {
      return 0;
    }
    // Format the number with commas
    const formattedNumber = number.toLocaleString();
    return `${formattedNumber} USD`;
  }