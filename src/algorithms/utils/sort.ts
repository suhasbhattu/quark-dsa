import { compare } from "./compare";

export const isSorted = (list: any[]): boolean => {
  let length = list.length;
  if (length === 0 || length === 1) {
    return true;
  }
  for (let index = 1; index < list.length; index++) {
    if (compare(list[index - 1], list[index]) === 1) {
      return false;
    }
  }
  return true;
};
