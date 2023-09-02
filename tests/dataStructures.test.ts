import { describe, expect, test } from "@jest/globals";
import { LinkedList, Stack } from "../src";
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
  test("Linked List Initialization", () => {
    const list = new LinkedList([1,2,3,5,4]);
    expect(list.print()).toBe("1 -> 2 -> 3 -> 5 -> 4");
    list.add(3);
    expect(list.getValue(3)).toBe(5);
    list.update(45, 3);
    expect(list.getValue(3)).toBe(45);
    list.remove(5);
    expect(list.getValue(4)).toBe(4);
    list.reverse();
    expect(list.getValue(0)).toBe(4);
    list.add(34, 6);
    expect(list.getValue(5)).toBe(34);
    list.add(12, 2);
    expect(list.getValue(2)).toBe(12);
    list.remove();    
    expect(list.getValue(0)).toBe(45);
    list.remove(0);
    expect(list.getValue(0)).toBe(12);
    list.addFirst(78);
    expect(list.getValue(0)).toBe(78);
    list.add(62, 0);
    expect(list.getValue(0)).toBe(62);
    list.remove(0);
    expect(list.getValue(0)).toBe(78);
    list.remove(5);
    expect(list.getValue(4)).toBe(1);
    list.add(65, 5);
    expect(list.getValue(5)).toBe(65);
    expect(list.getMiddleValue()).toBe(2);  
    list.rotateRight(4);
    expect(list.print()).toBe("3 -> 2 -> 1 -> 65 -> 78 -> 12");
    list.rotateRight(-4);
    expect(list.print()).toBe("78 -> 12 -> 3 -> 2 -> 1 -> 65");
    list.rotateLeft(4);
    expect(list.print()).toBe("1 -> 65 -> 78 -> 12 -> 3 -> 2");
    list.rotateLeft(-4);
    expect(list.print()).toBe("78 -> 12 -> 3 -> 2 -> 1 -> 65");
    list.rotateLeft(6);
    expect(list.print()).toBe("78 -> 12 -> 3 -> 2 -> 1 -> 65");
    list.rotateRight(6);
    expect(list.print()).toBe("78 -> 12 -> 3 -> 2 -> 1 -> 65");
    list.rotateRight(11);
    expect(list.print()).toBe("12 -> 3 -> 2 -> 1 -> 65 -> 78");
    const list2 = new LinkedList([7,8,9,10]);
    list.concat(list2);
    expect(list.print()).toBe("12 -> 3 -> 2 -> 1 -> 65 -> 78 -> 7 -> 8 -> 9 -> 10");
    const list3 = new LinkedList();
    list3.concat(list2);
    expect(list3.print()).toBe("7 -> 8 -> 9 -> 10");
  });
  test("Empty Linked List", () => {
    const list = new LinkedList();
    expect(list.length()).toBe(0);
    expect(() => list.remove(-2)).toThrow(
      "Provided index is not in the range of the linked list !!"
    );
    expect(list.print()).toBe("");
    expect(list.getValue(0)).toBe(null);
    expect(list.getMiddleNode()).toBe(null);
    expect(list.getMiddleValue()).toBe(null);
  });
});
