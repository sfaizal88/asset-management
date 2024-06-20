/**
 * Utils component
 * @author - Faizal 
 * @date - 19th June 2024
*/
// UTILS IMPORT
import {DefaultCurrency} from './constants';

export const convertToCurrency = (val: string | number) => {
  // Convert the string to a number
  const number = Number(val);
  // Check if the conversion is successful (number is not NaN)
  if (isNaN(number)) {
    return 0;
  }
  // Format the number with commas
  const formattedNumber = number.toLocaleString();
  return `${formattedNumber} ${DefaultCurrency}`;
}

/**
 * Calculate the percentage difference between bought and current values.
 *
 * @param {number} boughtValue - The value at which the item was bought.
 * @param {number} currentValue - The current value of the item.
 * @return {number} - The percentage difference between the bought and current values.
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

export const calculateTimeDifference = (savedTimeString: string) => {
  if (savedTimeString === null) {
      return 0 ;
  }

  const savedTime = parseInt(savedTimeString, 10); // Parse string to integer
  const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
  const timeDifference = currentTime - savedTime;
  return timeDifference/60;
}

export const generateUniqueId = () => {
  return Math.floor(1000000 + Math.random() * 9000000);
}
