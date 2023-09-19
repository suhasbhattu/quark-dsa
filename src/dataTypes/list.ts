import { MergeSort } from "../algorithms/sorting";

type MeanType = "arithmetic" | "geometric" | "harmonic" | "rms";

/**
 * Calculates the mean of the list.
 * @param list list of the numbers.
 * @param type type of the mean, supported types are "arithmetic", "geometric", "harmonic" and "rms(root mean square)". Default value is arithmetic if not provided.
 * @returns
 */

export const mean = (list: number[], type?: MeanType): number => {
  let meanValue = 0;
  const length = list.length;
  const selectedType = type ?? "arithmetic";
  switch (selectedType) {
    case "arithmetic":
      const sum = list.reduce((prev, curr) => prev + curr, 0);
      meanValue = sum / length;
      break;
    case "geometric":
      const mul = list.reduce((prev, curr) => prev * curr, 1);
      meanValue = Math.pow(mul, 1 / length);
      break;
    case "harmonic":
      const reciprocalSum = list.reduce((prev, curr) => prev + 1 / curr, 0);
      meanValue = length / reciprocalSum;
      break;
    case "rms":
      const squareSum = list.reduce((prev, curr) => prev + curr * curr, 0);
      const meanRms = squareSum / length;
      meanValue = Math.pow(meanRms, 0.5);
      break;
  }

  return Math.round(meanValue * 100) / 100;
};

/**
 * Calculates the median of the list.
 * @param list list of numbers.
 * @returns median of the list.
 */

export const median = (list: number[]): number => {
  MergeSort(list);
  let medianValue = 0;
  let length = list.length;
  let midValue = Math.floor(length / 2);
  if (length % 2 === 0) {
    medianValue = mean([list[midValue - 1], list[midValue]]);
  } else {
    medianValue = list[midValue];
  }
  return medianValue;
};

/**
 * Calculates the mode of the list.
 * @param list list of numbers
 * @returns mode of the list. If multiple numbers have the same highest frequency, it will return array of mode values.
 */

export const mode = (list: number[]): number | number[] => {
  let modeValue = [];
  const freq: any = {};
  for (const item of list) {
    if (freq[item] == null) {
      freq[item] = 1;
    } else {
      freq[item]++;
    }
  }
  const keys = Object.keys(freq);
  const sortedFreq = keys
    .map((key) => [key, freq[key]])
    .sort((a, b) => b[1] - a[1]);
  let max = sortedFreq[0];
  modeValue = sortedFreq.filter((a) => a[1] === max[1]);
  return modeValue.length === 1
    ? Number(modeValue[0][0])
    : modeValue.map((a) => Number(a[0]));
};

/**
 * This will remove duplicates from the passed argument list and return the same list.
 * @param list List of numbers or strings
 * @returns same list with duplicates removed
 */

export const removeDuplicates = (
  list: (number | string)[]
): (number | string)[] => {
  const freq: any = {};
  let i = 0,
    j = 0;
  const length = list.length;
  while (j < length) {
    if (freq[list[j]] == null) {
      freq[list[j]] = 1;
      list[i] = list[j];
      i++;
    }
    j++;
  }
  list.length = i;
  return list;
};
