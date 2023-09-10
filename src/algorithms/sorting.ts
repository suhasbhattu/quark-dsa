import { compare } from "./utils/compare";
import { swap } from "./utils/sort";

/**
 * Performs Bubble Sort on List
 * @param list List to be sorted
 * @param descending Sorting order, by default is ascending
 */
export const BubbleSort = (list: any[], descending?: boolean) => {
  let length = list.length;
  for (let index = 0; index < length - 1; index++) {
    for (let j = 0; j < length - index - 1; j++) {
      const comparison =
        descending != null && descending === true
          ? compare(list[j], list[j + 1]) === -1
          : compare(list[j], list[j + 1]) === 1;
      if (comparison) {
        const [swapped1, swapped2] = swap(list[j], list[j + 1]);
        list[j] = swapped1;
        list[j + 1] = swapped2;
      }
    }
  }
};

/**
 * Performs Selection Sort on List
 * @param list List to be sorted
 * @param descending Sorting order, by default is ascending
 */
export const SelectionSort = (list: any[], descending?: boolean) => {
  let length = list.length;
  for (let step = 0; step < length - 1; step++) {
    let minIndex = step;
    for (let index = step + 1; index < length; index++) {
      const comparison =
        descending != null && descending === true
          ? compare(list[index], list[minIndex]) === 1
          : compare(list[index], list[minIndex]) === -1;
      if (comparison) {
        minIndex = index;
      }
    }
    const [swapped1, swapped2] = swap(list[step], list[minIndex]);
    list[step] = swapped1;
    list[minIndex] = swapped2;
  }
};

/**
 * Performs Insertion Sort on List
 * @param list List to be sorted
 * @param descending Sorting order, by default is ascending
 */
export const InsertionSort = (list: any[], descending?: boolean) => {
  let length = list.length;
  for (let step = 1; step < length; step++) {
    let key = list[step];
    let j = step - 1;
    while (
      j >= 0 && descending != null && descending === true
        ? compare(key, list[j]) === 1
        : compare(key, list[j]) === -1
    ) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = key;
  }
};

const merge = (
  list: any[],
  p: number,
  q: number,
  r: number,
  descending?: boolean
) => {
  let n1 = q - p + 1;
  let n2 = r - q;
  let left = new Array(n1);
  let right = new Array(n2);

  for (let index = 0; index < n1; index++) {
    left[index] = list[p + index];
  }
  for (let index = 0; index < n2; index++) {
    right[index] = list[q + 1 + index];
  }

  let i = 0,
    j = 0,
    k = p;

  while (i < n1 && j < n2) {
    const comparison =
      descending != null && descending === true
        ? compare(left[i], right[j]) === 1
        : compare(left[i], right[j]) === -1 || compare(left[i], right[j]) === 0;
    if (comparison) {
      list[k] = left[i];
      i++;
    } else {
      list[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    list[k] = left[i];
    i++;
    k++;
  }

  while (j < n2) {
    list[k] = right[j];
    j++;
    k++;
  }
};

const mergeSortFunction = (
  list: any[],
  left: number,
  right: number,
  descending?: boolean
) => {
  if (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    mergeSortFunction(list, left, mid, descending);
    mergeSortFunction(list, mid + 1, right, descending);
    merge(list, left, mid, right, descending);
  }
};

/**
 * Performs Merge Sort on List
 * @param list List to be sorted
 * @param descending Sorting order, by default is ascending
 */
export const MergeSort = (list: any[], descending?: boolean) => {
  mergeSortFunction(list, 0, list.length - 1, descending);
};

const partition = (
  list: any[],
  low: number,
  high: number,
  descending?: boolean
) => {
  let pivot = list[high];
  let i = low - 1;
  for (let index = low; index < high; index++) {
    const comparison =
      descending != null && descending === true
        ? compare(list[index], pivot) === 1
        : compare(list[index], pivot) === -1 ||
          compare(list[index], pivot) === 0;
    if (comparison) {
      i++;
      const [swapped1, swapped2] = swap(list[i], list[index]);
      list[i] = swapped1;
      list[index] = swapped2;
    }
  }
  const [swapped1, swapped2] = swap(list[i + 1], list[high]);
  list[i + 1] = swapped1;
  list[high] = swapped2;
  return i + 1;
};

const quickSortFunction = (
  list: any[],
  low: number,
  high: number,
  descending?: boolean
) => {
  if (low < high) {
    let partitionIndex = partition(list, low, high, descending);
    quickSortFunction(list, low, partitionIndex - 1, descending);
    quickSortFunction(list, partitionIndex + 1, high, descending);
  }
};

/**
 * Performs Quick Sort on List
 * @param list List to be sorted
 * @param descending Sorting order, by default is ascending
 */
export const QuickSort = (list: any[], descending?: boolean) => {
  quickSortFunction(list, 0, list.length - 1, descending);
};

const countingSort = (
  list: number[],
  length: number,
  place: number,
  descending?: boolean
) => {
  const output = new Array(length);
  const count = new Array(10).fill(0);
  for (let index = 0; index < length; index++) {
    let x =
      descending != null && descending === true
        ? 9 - (Math.floor(list[index] / place) % 10)
        : Math.floor(list[index] / place) % 10;
    count[x]++;
  }
  for (let index = 1; index < 10; index++) {
    count[index] += count[index - 1];
  }
  for (let index = length - 1; index >= 0; index--) {
    let x =
      descending != null && descending === true
        ? 9 - (Math.floor(list[index] / place) % 10)
        : Math.floor(list[index] / place) % 10;
    output[count[x] - 1] = list[index];
    count[x]--;
  }
  for (let index = 0; index < length; index++) {
    list[index] = output[index];
  }
};

/**
 * Performs Radix Sort on List
 * @param list list of numbers to be sorted
 * @param descending Sorting order, by default is ascending
 */
export const RadixSort = (list: number[], descending?: boolean) => {
  const max = Math.max(...list);
  for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
    countingSort(list, list.length, place, descending);
  }
};
