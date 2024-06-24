/**
 * Utils component
 * @author - Faizal 
 * @date - 19th June 2024
*/
// UTILS IMPORT
import {DEFAULT_CURRENCY} from './constants';

// CONVERT STRING VAL TO CURRENCY
export const convertToCurrency = (val: string | number) => {
  // Convert the string to a number
  const number = Number(val);
  // Check if the conversion is successful (number is not NaN)
  if (isNaN(number)) {
    return 0;
  }
  // Format the number with commas
  const formattedNumber = number.toLocaleString();
  return `${formattedNumber} ${DEFAULT_CURRENCY}`;
}

/**
 * CALCULATE THE PERCENTAGE DIFFERENCE BETWEEN BOUGHT AND CURRENT VALUES.
 *
 * @PARAM {NUMBER} BOUGHTVALUE - THE VALUE AT WHICH THE ITEM WAS BOUGHT.
 * @PARAM {NUMBER} CURRENTVALUE - THE CURRENT VALUE OF THE ITEM.
 * @RETURN {NUMBER} - THE PERCENTAGE DIFFERENCE BETWEEN THE BOUGHT AND CURRENT VALUES.
 */
export const calculatePercentageDifference = (boughtValue: string | number = 0, currentValue: string| number = 0) => {
  boughtValue = Number(boughtValue);
  currentValue = Number(currentValue);
  if (boughtValue === 0) {
      return 0;
  }
  let difference = currentValue - boughtValue;
  let percentageDifference = (difference / boughtValue) * 100;
  return parseFloat(percentageDifference.toFixed(2));
}

// CALCULATE TIME DIFFERENCE
export const calculateTimeDifference = (savedTimeString: string) => {
  if (savedTimeString === null) {
      return 0 ;
  }

  const savedTime = parseInt(savedTimeString, 10); // Parse string to integer
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  const timeDifference = currentTime - savedTime;
  return timeDifference/60;
}

// GENERATE UNIQUE ID
export const generateUniqueId = () => {
  return Math.floor(1000000 + Math.random() * 9000000);
}
