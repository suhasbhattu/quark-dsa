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
    case "arithmetic": {
      const sum = list.reduce((prev, curr) => prev + curr, 0);
      meanValue = sum / length;
      break;
    }
    case "geometric": {
      const mul = list.reduce((prev, curr) => prev * curr, 1);
      meanValue = Math.pow(mul, 1 / length);
      break;
    }
    case "harmonic": {
      const reciprocalSum = list.reduce((prev, curr) => prev + 1 / curr, 0);
      meanValue = length / reciprocalSum;
      break;
    }
    case "rms": {
      const squareSum = list.reduce((prev, curr) => prev + curr * curr, 0);
      const meanRms = squareSum / length;
      meanValue = Math.pow(meanRms, 0.5);
      break;
    }
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
  const length = list.length;
  const midValue = Math.floor(length / 2);
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
  const max = sortedFreq[0];
  modeValue = sortedFreq.filter((a) => a[1] === max[1]);
  return modeValue.length === 1
    ? Number(modeValue[0][0])
    : modeValue.map((a) => Number(a[0]));
};

/**
 * Calculate the variance of the list.
 * @param list
 * @returns Returns the variance.
 */
export const variance = (list: number[]): number => {
  const listMean = mean(list);
  const squares = list.map((item) => (item - listMean) * (item - listMean));
  const sum = squares.reduce((prev, curr) => prev + curr, 0);
  return Math.round((sum / (list.length - 1)) * 100) / 100;
};

/**
 * Calculate the standard deviation of the list.
 * @param list
 * @returns Standard deviation of the list.
 */
export const standardDeviation = (list: number[]): number => {
  return Math.round(Math.sqrt(variance(list)) * 100) / 100;
};

/**
 * This will remove duplicates from the passed argument list and return the same list.
 * @param list List of numbers or strings
 * @returns same list with duplicates removed
 */

export const removeDuplicates = (
  list: (number | string)[],
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

interface histogramMap {
  [key: string | number]: number;
}
/**
 * Returns the histogram map for each item occurrence in a given list.
 * @param list
 * @returns Histogram map for a given list.
 */
export const histogram = (list: (number | string)[]): histogramMap => {
  const map: histogramMap = {};
  for (const item of list) {
    if (map[item]) {
      map[item]++;
    } else {
      map[item] = 1;
    }
  }
  return map;
};

/**
 * This will calculate the Greatest Common Divisor (GCD) of the list and return it.
 * @param list List of numbers
 * @returns Greatest Common Divisor (GCD) of the list
 */

export const gcd = (list: number[]): number => {
  if (list.length === 0) {
    return 0;
  }
  const recursiveGcd = (i: number, j: number) => {
    while (j !== 0) {
      const temp = j;
      j = i % j;
      i = temp;
    }
    return i;
  };
  let result = list[0];
  for (const item of list) {
    result = recursiveGcd(result, item);
  }
  return result;
};

/**
 * This will calculate the Least Common Multiple (LCM) of the list and return it.
 * @param list List of numbers
 * @returns Least Common Multiple (LCM) of the list
 */

export const lcm = (list: number[]): number => {
  if (list.length === 0) {
    return 0;
  }
  let lcm = list[0];
  for (const item of list) {
    lcm = (lcm * item) / gcd([lcm, item]);
  }
  return lcm;
};

/**
 * This will add two matrices and will return the result.
 * @param matrix1 First matrix
 * @param matrix2 Second martix
 * @returns Addition of two metrices.
 */

export const matrixAddition = (
  matrix1: number[][],
  matrix2: number[][],
): number[][] => {
  const m1 = matrix1.length,
    n1 = matrix1[0].length;
  const m2 = matrix2.length,
    n2 = matrix2[0].length;
  if (m1 === m2 && n1 === n2) {
    const result = new Array(m1);
    for (let index = 0; index < m1; index++) {
      result[index] = [];
      for (let index2 = 0; index2 < m2; index2++) {
        result[index][index2] = matrix1[index][index2] + matrix2[index][index2];
      }
    }
    return result;
  } else {
    throw new Error("Order of both matrix are not same.");
  }
};

/**
 * This will subtract second matrix from first and will return the result.
 * @param matrix1 First matrix
 * @param matrix2 Second martix
 * @returns Subtract of two metrices.
 */

export const matrixSubtraction = (
  matrix1: number[][],
  matrix2: number[][],
): number[][] => {
  const m1 = matrix1.length,
    n1 = matrix1[0].length;
  const m2 = matrix2.length,
    n2 = matrix2[0].length;
  if (m1 === m2 && n1 === n2) {
    const result = new Array(m1);
    for (let index = 0; index < m1; index++) {
      result[index] = [];
      for (let index2 = 0; index2 < m2; index2++) {
        result[index][index2] = matrix1[index][index2] - matrix2[index][index2];
      }
    }
    return result;
  } else {
    throw new Error("Order of both matrix are not same.");
  }
};

/**
 * This will multiply both matrices and will return the result.
 * @param matrix1 First matrix
 * @param matrix2 Second martix
 * @returns Multiplication of two metrices.
 */

export const matrixMultiplication = (
  matrix1: number[][],
  matrix2: number[][],
): number[][] => {
  const m1 = matrix1.length,
    n1 = matrix1[0].length;
  const m2 = matrix2.length,
    n2 = matrix2[0].length;
  if (n1 === m2) {
    const result = new Array(m1);
    for (let index = 0; index < m1; index++) {
      result[index] = [];
      for (let index2 = 0; index2 < n2; index2++) {
        result[index][index2] = 0;
        for (let index3 = 0; index3 < n1; index3++) {
          result[index][index2] +=
            matrix1[index][index3] * matrix2[index3][index2];
        }
      }
    }
    return result;
  } else {
    throw new Error(
      "Number of columns in first matrix should be same as number of rows in second matrix",
    );
  }
};

/**
 * This will return determinant of the matrix.
 * @param matrix
 * @returns determinant of matrix.
 */
export const matrixDeterminant = (matrix: number[][]) => {
  const m = matrix.length,
    n = matrix[0].length;
  if (m === n) {
    const determinant = (mat: number[][], k: number) => {
      let det = 0;
      const subMatrix = new Array(k);
      for (let index = 0; index < subMatrix.length; index++) {
        subMatrix[index] = [];
      }
      if (k === 2) {
        return mat[0][0] * mat[1][1] - mat[1][0] * mat[0][1];
      } else {
        for (let index = 0; index < k; index++) {
          let subi = 0;
          for (let index2 = 1; index2 < k; index2++) {
            let subj = 0;
            for (let index3 = 0; index3 < k; index3++) {
              if (index3 === index) {
                continue;
              }
              subMatrix[subi][subj] = mat[index2][index3];
              subj++;
            }
            subi++;
          }
          det =
            det +
            Math.pow(-1, index) * mat[0][index] * determinant(subMatrix, k - 1);
        }
      }
      return det;
    };
    return determinant(matrix, n);
  } else {
    throw new Error(
      "Determinant of matrix can be defined only for square matrix.",
    );
  }
};
