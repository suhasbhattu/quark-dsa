import { describe, expect, test } from "@jest/globals";
import { Stack } from "../src";

describe("Data Structures Module", () => {
  test("Stack Initialization", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.length()).toBe(0);
  });
  test("Stack Basic Operations", () => {
    const stack = new Stack();
    stack.push(23);
    stack.push(36);
    stack.push(89);
    expect(stack.length()).toBe(3);
    expect(stack.search(36)).toBe(1);
    expect(stack.search(98)).toBe(-1);
    stack.pop();
    expect(stack.length()).toBe(2);
    stack.pop();
    expect(stack.length()).toBe(1);
    expect(stack.peek()).toBe(23);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
  test("Stack Error Handling", () => {
    expect(() => new Stack(-1)).toThrow("Stack size cannot be negative!!");
    const stack = new Stack(2);
    stack.push(10);
    stack.push(25);
    expect(() => stack.push(26)).toThrow(
      "Stack is full, cannot be pushed new items."
    );
    stack.pop();
    stack.pop();
    expect(() => stack.pop()).toThrow(
      "Stack is empty, no items can be popped."
    );
  });
});
