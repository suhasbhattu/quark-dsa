import { describe, expect, test } from "@jest/globals";
import { BinarySearch, LinearSearch } from "../src";
import { compare } from "../src/algorithms/utils/compare";

describe("Algorithms Module", () => {
  test("Compare function", () => {
    expect(compare(4, 4)).toBe(0);
    expect(compare("quark-dsa", "quarkdsa")).toBe(-1);
    expect(compare(9, 6)).toBe(1);
    expect(compare(6, 9)).toBe(-1);
    expect(compare(true, true)).toBe(true);
    expect(compare(false, true)).toBe(false);
    expect(compare(false, false)).toBe(true);
    expect(compare("quark-dsa", "testing-dsa")).toBe(-1);
    expect(compare([2, 1, 4, 5, 6], [2, 1, 4, 5, 6])).toBe(true);
    expect(compare([2, 1, 4, 5, 6], [2, 1, 4, 5, 7])).toBe(false);
    expect(compare([2, 1, 4, 5, 6], [])).toBe(false);
    expect(compare([[2, 1, 4], 5, 6], [2, 1, [4, 5, 6]])).toBe(false);
    expect(
      compare([true, { name: "Sam" }], [true, { elements: { id: "321-er43" } }])
    ).toBe(false);
    expect(
      compare(
        { name: "Sam", age: 78, result: true, regions: ["LB", "IO", "PD"] },
        { name: "Sam", age: 78, result: true, regions: ["LB", "IO", "PD"] }
      )
    ).toBe(true);
    expect(
      compare(
        { name: "Sam", age: 78, result: true, regions: ["LB", "IO", "PD"] },
        {
          name: "Sam",
          age: 78,
          result: true,
          regions: ["LB", "IO", "PD"],
          elements: { id: "321-er43", key: "key1" },
        }
      )
    ).toBe(false);
  });
  test("Search Algorithms", () => {
    expect(LinearSearch([1, 2, 3, 4, 5, 6], 6)).toBe(5);
    expect(LinearSearch([1, 2, 3, 4, 5, 6], 8)).toBe(-1);
    expect(LinearSearch(["John", "Paul", "George", "Ringo"], "George")).toBe(2);
    expect(BinarySearch([1, 2, 3, 4, 5, 6], 6)).toBe(5);
    expect(BinarySearch([1, 2, 3, 4, 5, 6], 8)).toBe(-1);
    expect(() =>
      BinarySearch(["John", "Paul", "George", "Ringo"], "George")
    ).toThrow("List is not sorted, so Binary Search cannot be performed!!");
    expect(BinarySearch(["George", "john", "Paul", "ringo"], "George")).toBe(0);
    expect(BinarySearch([], 34)).toBe(-1);
  });
});
