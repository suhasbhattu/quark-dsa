export class Queue {
  private readonly array: any[];
  private readonly size: number;
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

  /**
   * Add a new item in the queue.
   * @param item
   */
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

  /**
   * Remove the first item from the queue and return it.
   * @returns The front item in the queue.
   */
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

  /**
   * Returns the front element of the queue.
   * @returns The front element of the queue.
   */
  getFront(): any {
    return this.array[this.front];
  }

  /**
   * Returns the rear element of the queue.
   * @returns The rear element of the queue.
   */
  getRear(): any {
    return this.array[this.rear];
  }

  /**
   * Checks if the queue is empty.
   * @returns true if the queue is empty, otherwise false.
   */
  isEmpty(): boolean {
    return (this.front === -1 && this.rear === -1) || this.front > this.rear;
  }

  /**
   * Check if queue is full now.
   * @returns true if the queue is full, otherwise false.
   */
  isFull(): boolean {
    return this.length() >= this.size;
  }

  /**
   * Returns the current length of the queue.
   * @returns The length of the queue.
   */
  length(): number {
    if (this.front === -1 && this.rear === -1) {
      return 0;
    }
    return Math.abs(this.rear - this.front) + 1;
  }

  /**
   * Checks for an item in the queue and returns its index.
   * @param item
   * @returns The index of matched item. If not matched, it will return -1.
   */
  search(item: any): number {
    let position = -1;
    let i = Math.min(this.front, this.rear);
    const j = Math.max(this.front, this.rear);
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
