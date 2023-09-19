import { describe, expect, test } from "@jest/globals";
import {
  isNumberPalindrome,
  isPrime,
  reverseNumber,
  isStringPalindrome,
  reverseString,
  mean,
  median,
  mode,
  removeDuplicates,
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
    expect(
      removeDuplicates([1, 2, 3, 3, 2, 1, 4, 5, 1, 5, 8, 3])
    ).toStrictEqual([1, 2, 3, 4, 5, 8]);
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
});
