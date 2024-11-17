export class Stack {
  private readonly array: any[];
  private readonly size: number;
  private top: number;

  constructor(size?: number) {
    if (size !== undefined && size < 0) {
      throw new Error("Stack size cannot be negative!!");
    }
    this.size = size ?? 2 ** 16 - 1;
    this.array = new Array(this.size).fill(undefined);
    this.top = -1;
  }

  /**
   * Pushes new item in the stack.
   * @param item
   */
  push(item: any): void {
    if (this.top === this.size - 1) {
      throw new Error("Stack is full, cannot be pushed new items.");
    } else {
      this.top++;
      this.array[this.top] = item;
    }
  }

  /**
   * Pops the top elements from the stack.
   * @returns The popped item.
   */
  pop(): any {
    if (this.isEmpty()) {
      throw new Error("Stack is empty, no items can be popped.");
    } else {
      const item = this.array[this.top];
      this.array[this.top] = undefined;
      this.top--;
      return item;
    }
  }

  /**
   * Check if the stack is empty.
   * @returns true if the stack is empty, otherwise false.
   */
  isEmpty(): boolean {
    return this.top === -1;
  }

  /**
   * Returns the top item in the stack.
   * @returns The top item in the stack.
   */
  peek(): any {
    return this.array[this.top];
  }

  /**
   * Returns the length of the stack.
   * @returns the length of the stack.
   */
  length(): number {
    return this.top + 1;
  }

  /**
   * Checks for an item in a stack and returns its index.
   * @param item
   * @returns The index of matched item. If not matched, it will return -1.
   */
  search(item: any): number {
    let position = -1;
    let i = 0;
    while (i <= this.top) {
      if (this.array[i] === item) {
        position = i;
        break;
      }
      i++;
    }
    return position;
  }
}
