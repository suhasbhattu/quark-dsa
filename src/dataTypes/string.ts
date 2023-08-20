export const reverseString = (string: string): string => {
  let reverse = "";
  let i = string.length - 1;
  while (i >= 0) {
    reverse += string[i];
    i--;
  }
  return reverse;
};

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
