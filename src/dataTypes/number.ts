/**
 * Reverse the given number
 * @param number
 * @returns the reversed number
 */
export const reverseNumber = (number: number): number => {
  let reverse = 0;
  const isNegative = number < 0;
  if (isNegative) {
    number *= -1;
  }
  while (number !== 0) {
    const remainder = number % 10;
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

  const primeFlag = true;
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

/**
 * Calculate factorial of the given number.
 * @param number
 * @returns Factorial of the number.
 */
export const factorial = (number: number): number => {
  if (number < 0) {
    throw new Error("Factorial of negative number cannot be defined.");
  }
  if (number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

/**
 * Calculate permutations of selecting k entities from a set of n entities.
 * @param n Total number of entities
 * @param k Number of entities you want to select.
 * @returns The number of possible selections.
 */
export const permutations = (n: number, k: number): number => {
  if (k > n) {
    throw new Error(`You cannot select ${k} entities from a set of ${n}!!`);
  }
  return factorial(n) / factorial(n - k);
};

/**
 * Calculate combinations of arrangements of k entities from a set of n entities.
 * @param n Total number of entities.
 * @param k Number of entities you want to arrange.
 * @returns The number of possible arrangements.
 */
export const combinations = (n: number, k: number): number => {
  if (k > n) {
    throw new Error(`You cannot arrange ${k} entities from a set of ${n}!!`);
  }
  return factorial(n) / (factorial(k) * factorial(n - k));
};
