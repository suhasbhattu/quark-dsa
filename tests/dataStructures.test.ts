import { describe, expect, test } from "@jest/globals";
import { Stack } from "../src";
import { Queue } from "../src/dataStructures/queue";

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
  test("Queue Initialization", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.length()).toBe(0);
  });
  test("Queue basic operations", () => {
    const queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(8);
    queue.enqueue(45);
    expect(queue.length()).toBe(3);
    expect(queue.search(36)).toBe(-1);
    expect(queue.search(45)).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.getFront()).toBe(8);
    expect(queue.dequeue()).toBe(8);
    expect(queue.getFront()).toBe(45);
    expect(queue.getRear()).toBe(45);
    expect(queue.dequeue()).toBe(45);
    expect(queue.length()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(76);
    queue.enqueue(68);
    queue.enqueue(43);
    queue.enqueue(5);
    expect(queue.length()).toBe(4);
    expect(queue.search(36)).toBe(-1);
    expect(queue.search(76)).toBe(0);
    expect(queue.dequeue()).toBe(76);
    expect(queue.getFront()).toBe(68);
    expect(queue.dequeue()).toBe(68);
    expect(queue.getFront()).toBe(43);
    expect(queue.getRear()).toBe(5);
    expect(queue.dequeue()).toBe(43);
    expect(queue.length()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.dequeue()).toBe(5);
    expect(queue.getFront()).toBe(undefined);
    expect(queue.getRear()).toBe(undefined);
  });
  test("Queue Error Handling", () => {
    expect(() => new Queue(-1)).toThrow("Queue size cannot be negative!!");
    const queue = new Queue(3);
    queue.enqueue(56);
    queue.enqueue(89);
    queue.enqueue(43);
    expect(() => queue.enqueue(54)).toThrow(
      "Queue is full, cannot add new item."
    );
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(() => queue.dequeue()).toThrow(
      "Queue is empty, cannot remove an item."
    );
  });
});
