/**
 * Reverse the given number
 * @param number 
 * @returns the reversed number
 */
export const reverseNumber = (number: number): number => {
  let reverse = 0;
  let isNegative = number < 0;
  if (isNegative) {
    number *= -1;
  }
  while (number !== 0) {
    let remainder = number % 10;
    reverse = reverse * 10 + remainder;
    number = Math.floor(number / 10);
  }
  if (isNegative) {
    reverse *= -1;
  }
  return reverse;
};

/**
 * Check if number is prime.
 * @param number 
 * @returns true if number is prime, otherwise false.
 */

export const isPrime = (number: number): boolean => {
  if (number === 1 || number < 0) {
    return false;
  }

  let primeFlag = true;
  let i = 2;

  while (i * i <= number) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }
  return primeFlag;
};

/**
 * Check if number is palindrome.
 * @param number 
 * @returns true if number is palindrome, otherwise false.
 */
export const isNumberPalindrome = (number: number): boolean => {
  if (number < 0) {
    return false;
  }
  const reverse = reverseNumber(number);
  return number === reverse;
};
