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

export const isNumberPalindrome = (number: number): boolean => {
  if (number < 0) {
    return false;
  }
  const reverse = reverseNumber(number);
  return number === reverse;
};
