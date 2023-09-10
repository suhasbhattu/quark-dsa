import { describe, expect, test } from "@jest/globals";
import {
  BinarySearch,
  BubbleSort,
  InsertionSort,
  LinearSearch,
  MergeSort,
  QuickSort,
  RadixSort,
  SelectionSort,
} from "../src";
import { compare } from "../src/algorithms/utils/compare";
import { clone } from "../src/algorithms/utils/sort";

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
  test("Cloning", () => {
    const list = [20, 12, 10, 15, 2];
    const object = {
      members: [
        { name: "John", age: 40 },
        { name: "Paul", age: 50 },
        { name: "George", age: 70 },
        { name: "Ringo", age: 80 },
      ],
    };
    expect(JSON.stringify(clone(object))).toBe(
      '{"members":[{"name":"John","age":40},{"name":"Paul","age":50},{"name":"George","age":70},{"name":"Ringo","age":80}]}'
    );
    expect(clone(list).toString()).toBe("20,12,10,15,2");
  });
  test("Sorting Algorithms", () => {
    const list = [20, 12, 10, 15, 2];
    const list2 = ["John", "paul", "George", "Ringo"];
    SelectionSort(list);
    expect(list.toString()).toBe("2,10,12,15,20");
    SelectionSort(list, true);
    expect(list.toString()).toBe("20,15,12,10,2");
    SelectionSort(list2);
    expect(list2.toString()).toBe("George,John,paul,Ringo");
    const list3 = [9, 5, 1, 4, 3];
    const list4 = ["John", "paul", "George", "Ringo"];
    InsertionSort(list3);
    expect(list3.toString()).toBe("1,3,4,5,9");
    InsertionSort(list3, true);
    expect(list3.toString()).toBe("9,5,4,3,1");
    InsertionSort(list4);
    expect(list4.toString()).toBe("George,John,paul,Ringo");
    const list5 = [-2, 45, 0, 11, -9];
    const list6 = ["John", "paul", "George", "Ringo"];
    BubbleSort(list5);
    expect(list5.toString()).toBe("-9,-2,0,11,45");
    BubbleSort(list5, true);
    expect(list5.toString()).toBe("45,11,0,-2,-9");
    BubbleSort(list6);
    expect(list6.toString()).toBe("George,John,paul,Ringo");
    const list7 = [6, 5, 12, 10, 9, 1];
    const list8 = ["John", "paul", "George", "Ringo"];
    MergeSort(list7);
    expect(list7.toString()).toBe("1,5,6,9,10,12");
    MergeSort(list7, true);
    expect(list7.toString()).toBe("12,10,9,6,5,1");
    MergeSort(list8);
    expect(list8.toString()).toBe("George,John,paul,Ringo");
    const list9 = [8, 7, 6, 1, 0, 9, 2];
    const list10 = ["John", "paul", "George", "Ringo"];
    QuickSort(list9);
    expect(list9.toString()).toBe("0,1,2,6,7,8,9");
    QuickSort(list9, true);
    expect(list9.toString()).toBe("9,8,7,6,2,1,0");
    QuickSort(list10);
    expect(list10.toString()).toBe("George,John,paul,Ringo");
    const list11 = [8, 7, 6, 1, 0, 9, 2];
    RadixSort(list11);
    expect(list11.toString()).toBe("0,1,2,6,7,8,9");
    RadixSort(list11, true);
    expect(list11.toString()).toBe("9,8,7,6,2,1,0");
    const list12 = [121, 432, 564, 23, 1, 45, 788];
    RadixSort(list12);
    expect(list12.toString()).toBe("1,23,45,121,432,564,788");
    RadixSort(list12, true);
    expect(list12.toString()).toBe("788,564,432,121,45,23,1");
  });
});
