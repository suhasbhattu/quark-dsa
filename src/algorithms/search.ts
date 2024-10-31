import { compare } from "./utils/compare";
import { isSorted } from "./utils/sort";

/**
 * Performs linear search over a list to search a given key.
 * @param list List to be searched
 * @param key search key
 * @returns Position of a searched key in a list, if key is not found, then it returns -1.
 */
export const LinearSearch = (list: any[], key: any): number => {
  let position = -1;
  for (let index = 0; index < list.length; index++) {
    const compareOutput = compare(list[index], key);
    if (compareOutput === true || compareOutput === 0) {
      position = index;
      break;
    }
  }
  return position;
};

/**
 * Performs binary search over a list to search a given key.
 * @param list List to be searched
 * @param key search key
 * @returns Position of a searched key in a list, if key is not found, then it returns -1.
 */

export const BinarySearch = (list: any[], key: any): number => {
  if (isSorted(list)) {
    let position = -1;
    const length = list.length;
    let start = 0;
    let end = length - 1;
    while (start <= end) {
      const mid = Math.floor(start + (end - start) / 2);
      if (compare(list[mid], key) === 0) {
        position = mid;
        break;
      } else if (compare(list[mid], key) === 1) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return position;
  } else {
    throw new Error(
      "List is not sorted, so Binary Search cannot be performed!!",
    );
  }
};
