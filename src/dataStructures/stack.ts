export class Stack {
  private array: any[];
  private size: number;
  private top: number;

  constructor(size?: number) {
    if (size !== undefined && size < 0) {
      throw new Error("Stack size cannot be negative!!");
    }
    this.size = size ?? 2 ** 16 - 1;
    this.array = new Array(this.size).fill(undefined);
    this.top = -1;
  }

  push(item: any): void {
    if (this.top === this.size - 1) {
      throw new Error("Stack is full, cannot be pushed new items.");
    } else {
      this.top++;
      this.array[this.top] = item;
    }
  }

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

  isEmpty(): boolean {
    return this.top === -1;
  }

  peek(): any {
    return this.array[this.top];
  }

  length(): number {
    return this.top + 1;
  }

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
