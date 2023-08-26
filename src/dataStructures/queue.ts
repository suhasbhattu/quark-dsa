export class Queue {
  private array: any[];
  private size: number;
  private front: number;
  private rear: number;

  constructor(size?: number) {
    if (size !== undefined && size < 0) {
      throw new Error("Queue size cannot be negative!!");
    }
    this.size = size ?? 2 ** 16 - 1;
    this.array = new Array(this.size).fill(undefined);
    this.front = -1;
    this.rear = -1;
  }

  enqueue(item: any): void {
    if (this.isFull()) {
      throw new Error("Queue is full, cannot add new item.");
    } else {
      if (this.front === -1) {
        this.front = 0;
      }
      this.rear++;
      this.array[this.rear % this.size] = item;
    }
  }

  dequeue(): any {
    if (this.isEmpty()) {
      throw new Error("Queue is empty, cannot remove an item.");
    } else {
      const item = this.array[this.front];
      this.array[this.front % this.size] = undefined;
      this.front++;
      if (this.front > this.rear) {
        this.front = -1;
        this.rear = -1;
      }
      return item;
    }
  }

  getFront(): any {
    return this.array[this.front];
  }

  getRear(): any {
    return this.array[this.rear];
  }

  isEmpty(): boolean {
    return (this.front === -1 && this.rear === -1) || this.front > this.rear;
  }

  isFull(): boolean {
    return this.length() >= this.size;
  }

  length(): number {
    if (this.front === -1 && this.rear === -1) {
      return 0;
    }
    return Math.abs(this.rear - this.front) + 1;
  }

  search(item: any): number {
    let position = -1;
    let i = Math.min(this.front, this.rear);
    let j = Math.max(this.front, this.rear);
    while (i <= j) {
      if (this.array[i] === item) {
        position = i;
        break;
      }
      i++;
    }
    return position;
  }
}
