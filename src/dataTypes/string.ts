import { BubbleSort } from "../algorithms/sorting";

/**
 * Reverse the given string
 * @param string
 * @returns reversed string
 */
export const reverseString = (string: string): string => {
  let reverse = "";
  let i = string.length - 1;
  while (i >= 0) {
    reverse += string[i];
    i--;
  }
  return reverse;
};

/**
 * Check if the given string is palindrome
 * @param string
 * @returns true if string is palindrome, otherwise false.
 */
export const isStringPalindrome = (string: string): boolean => {
  let i = 0;
  let j = string.length - 1;
  while (i <= j) {
    if (string[i] !== string[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

/**
 * Sort the given string in ascending and descending order
 * @param string
 * @param descending
 * @returns Sorted string
 */
export const sortString = (string: string, descending?: boolean): string => {
  const array = [...string];
  BubbleSort(array, descending);
  return array.join("");
};

/**
 * Returns the list of words in the given sentence or string.
 * @param string 
 * @returns List of words.
 */
export const getWords = (string: string): string[] => {
  if (string.length === 0) {
    return [];
  }
  const matches = string.match(/\b[^\s]+\b/g);
  return matches ?? [];
};
