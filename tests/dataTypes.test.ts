import { describe, expect, test } from "@jest/globals";
import {
  isNumberPalindrome,
  isPrime,
  reverseNumber,
  isStringPalindrome,
  reverseString,
} from "../src/index";

describe("Data Type Module", () => {
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
