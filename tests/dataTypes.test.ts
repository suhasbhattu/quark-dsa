import { describe, expect, test } from "@jest/globals";
import {
  isNumberPalindrome,
  isPrime,
  reverseNumber,
  factorial,
  permutations,
  combinations,
  isStringPalindrome,
  reverseString,
  sortString,
  mean,
  median,
  mode,
  variance,
  standardDeviation,
  removeDuplicates,
  histogram,
  gcd,
  lcm,
  matrixAddition,
  matrixSubtraction,
  matrixMultiplication,
  matrixDeterminant,
  getSubsets,
  getWords,
} from "../src/index";

describe("Data Type Module", () => {
  test("Mean Array", () => {
    expect(mean([3, 5, 9, 5, 7, 2])).toBe(5.17);
    expect(mean([2, 6, 4, 5, 8])).toBe(5);
    expect(mean([4, 10, 16, 24], "geometric")).toBe(11.13);
    expect(mean([10, 25, 5, 30], "geometric")).toBe(13.92);
    expect(mean([1, 3, 5, 7], "harmonic")).toBe(2.39);
    expect(mean([10, 2, 4, 7], "harmonic")).toBe(4.03);
    expect(mean([1, 3, 5, 7, 9], "rms")).toBe(5.74);
    expect(mean([6, 5, 4, 2, 7], "rms")).toBe(5.1);
    expect(mean([2, 3, 5, 7, 11], "rms")).toBe(6.45);
    expect(
      median([4, 12, 14, 17, 22, 23, 23, 24, 25, 29, 40, 67, 77, 82, 92])
    ).toBe(24);
    expect(median([142, 140, 130, 150, 160, 135, 158, 132])).toBe(141);
    expect(mode([3, 3, 6, 9, 16, 16, 16, 27, 27, 37, 48])).toBe(16);
    expect(mode([3, 3, 3, 9, 16, 16, 16, 27, 37, 48])).toStrictEqual([3, 16]);
    expect(variance([46, 69, 32, 60, 52, 41])).toBe(177.2);
    expect(variance([4, 2, 5, 8, 6])).toBe(5);
    expect(standardDeviation([46, 69, 32, 60, 52, 41])).toBe(13.31);
    expect(standardDeviation([4, 2, 5, 8, 6])).toBe(2.24);
    expect(
      removeDuplicates([1, 2, 3, 3, 2, 1, 4, 5, 1, 5, 8, 3])
    ).toStrictEqual([1, 2, 3, 4, 5, 8]);
    expect(histogram([3, 3, 3, 9, 16, 16, 16, 27, 37, 48])).toStrictEqual({
      "3": 3,
      "9": 1,
      "16": 3,
      "27": 1,
      "37": 1,
      "48": 1,
    });
    expect(gcd([8, 12, 16])).toBe(4);
    expect(gcd([13, 17, 48, 91])).toBe(1);
    expect(gcd([108, 144])).toBe(36);
    expect(gcd([])).toBe(0);
    expect(lcm([12, 18, 24])).toBe(72);
    expect(lcm([10, 12, 15, 75])).toBe(300);
    expect(lcm([])).toBe(0);
    expect(
      matrixAddition(
        [
          [2, 4, 3],
          [5, 7, 8],
          [9, 6, 7],
        ],
        [
          [3, 5, 7],
          [8, 3, 4],
          [5, 7, 8],
        ]
      )
    ).toStrictEqual([
      [5, 9, 10],
      [13, 10, 12],
      [14, 13, 15],
    ]);
    expect(() => {
      matrixAddition(
        [
          [2, 5, 4],
          [4, 3, 6],
        ],
        [
          [1, 2, 3, 4],
          [7, 8, 9, 5],
        ]
      );
    }).toThrow("Order of both matrix are not same.");
    expect(
      matrixSubtraction(
        [
          [2, 4, 3],
          [5, 7, 8],
          [9, 6, 7],
        ],
        [
          [3, 5, 7],
          [8, 3, 4],
          [5, 7, 8],
        ]
      )
    ).toStrictEqual([
      [-1, -1, -4],
      [-3, 4, 4],
      [4, -1, -1],
    ]);
    expect(() => {
      matrixSubtraction(
        [
          [2, 5, 4],
          [4, 3, 6],
        ],
        [
          [1, 2, 3, 4],
          [7, 8, 9, 5],
        ]
      );
    }).toThrow("Order of both matrix are not same.");
    expect(
      matrixMultiplication(
        [
          [1, 2, 3],
          [4, 5, 6],
        ],
        [
          [7, 8],
          [9, 10],
          [11, 12],
        ]
      )
    ).toStrictEqual([
      [58, 64],
      [139, 154],
    ]);
    expect(matrixMultiplication([[4], [5], [6]], [[1, 2, 3]])).toStrictEqual([
      [4, 8, 12],
      [5, 10, 15],
      [6, 12, 18],
    ]);
    expect(() => {
      matrixMultiplication(
        [
          [1, 2],
          [5, 4],
        ],
        [
          [56, 43, 67],
          [65, 34, 89],
          [12, 34, 65],
        ]
      );
    }).toThrow(
      "Number of columns in first matrix should be same as number of rows in second matrix"
    );
    expect(
      matrixDeterminant([
        [7, 1, 3],
        [2, 4, 1],
        [1, 5, 1],
      ])
    ).toBe(10);
    expect(
      matrixDeterminant([
        [4, 3, 2, 2],
        [0, 1, -3, 3],
        [0, -1, 3, 3],
        [0, 3, 1, 1],
      ])
    ).toBe(-240);
    expect(() => {
      matrixDeterminant([
        [7, 1, 3],
        [2, 4, 1],
      ]);
    }).toThrow("Determinant of matrix can be defined only for square matrix.");
    expect(getSubsets([1, 2, 3])).toStrictEqual([
      [],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 3],
      [2],
      [2, 3],
      [3],
    ]);
    expect(getSubsets([1, 2, 3, 4])).toStrictEqual([
      [],
      [1],
      [1, 2],
      [1, 2, 3],
      [1, 2, 3, 4],
      [1, 2, 4],
      [1, 3],
      [1, 3, 4],
      [1, 4],
      [2],
      [2, 3],
      [2, 3, 4],
      [2, 4],
      [3],
      [3, 4],
      [4],
    ]);
    expect(
      removeDuplicates([
        "John",
        "George",
        "Paul",
        "Ringo",
        "George",
        "Bob",
        "Elvis",
        "Freddie",
      ])
    ).toStrictEqual([
      "John",
      "George",
      "Paul",
      "Ringo",
      "Bob",
      "Elvis",
      "Freddie",
    ]);
  });
  test("Reverse String", () => {
    expect(reverseString("noon")).toBe("noon");
    expect(reverseString("This statement is false.")).toBe(
      ".eslaf si tnemetats sihT"
    );
    expect(reverseString("mississippi")).toBe("ippississim");
  });

  test("String Palindrome", () => {
    expect(isStringPalindrome("noon")).toBe(true);
    expect(isStringPalindrome("mississippi")).toBe(false);
    expect(isStringPalindrome("racecar")).toBe(true);
  });

  test("Sort String", () => {
    expect(sortString("mississippi")).toBe("iiiimppssss");
    expect(sortString("structure", true)).toBe("uuttsrrec");
    expect(sortString("vision-2040")).toBe("-0024iinosv");
  });

  test("Get Words", () => {
    expect(getWords("")).toStrictEqual([]);
    expect(getWords("///>>??")).toStrictEqual([]);
    expect(
      getWords("Lorem ipsum dolor sit amet, consectetur adipiscing elit")
    ).toStrictEqual([
      "Lorem",
      "ipsum",
      "dolor",
      "sit",
      "amet",
      "consectetur",
      "adipiscing",
      "elit",
    ]);
    expect(
      getWords(
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune"
      )
    ).toStrictEqual([
      "To",
      "be",
      "or",
      "not",
      "to",
      "be",
      "that",
      "is",
      "the",
      "question",
      "Whether",
      "tis",
      "nobler",
      "in",
      "the",
      "mind",
      "to",
      "suffer",
      "The",
      "slings",
      "and",
      "arrows",
      "of",
      "outrageous",
      "fortune",
    ]);
  });

  test("Reverse Number", () => {
    expect(reverseNumber(132)).toBe(231);
    expect(reverseNumber(0)).toBe(0);
    expect(reverseNumber(-85687)).toBe(-78658);
  });

  test("Prime Number", () => {
    expect(isPrime(91)).toBe(false);
    expect(isPrime(23373613)).toBe(true);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(-43)).toBe(false);
  });

  test("Number Palindrome", () => {
    expect(isNumberPalindrome(56965)).toBe(true);
    expect(isNumberPalindrome(-9889)).toBe(false);
    expect(isNumberPalindrome(853691196358)).toBe(true);
  });

  test("Number Factorial", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(15)).toBe(1307674368000);
    expect(() => factorial(-2)).toThrow(
      "Factorial of negative number cannot be defined."
    );
  });

  test("Permutations", () => {
    expect(permutations(5, 2)).toBe(20);
    expect(permutations(12, 2)).toBe(132);
    expect(() => permutations(5, 8)).toThrow(
      "You cannot select 8 entities from a set of 5!!"
    );
  });

  test("Combinations", () => {
    expect(combinations(5, 2)).toBe(10);
    expect(combinations(12, 2)).toBe(66);
    expect(() => combinations(5, 8)).toThrow(
      "You cannot arrange 8 entities from a set of 5!!"
    );
  });
});
