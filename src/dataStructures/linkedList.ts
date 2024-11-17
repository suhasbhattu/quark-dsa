class LinkedListNode {
  private value: any;
  private next: LinkedListNode | null;

  constructor(value?: any) {
    this.value = value ?? null;
    this.next = null;
  }

  getValue() {
    return this.value;
  }

  getNext() {
    return this.next;
  }

  setValue(value: any) {
    this.value = value;
  }

  setNext(next: LinkedListNode | null) {
    this.next = next;
  }
}

export class LinkedList {
  private head: LinkedListNode | null;

  constructor(list?: any[]) {
    this.head = null;
    if (list) {
      this.constructListFromArray(list);
    }
  }

  /**
   * Construct the linked list from an array.
   * @param array The array from which the list has to be constructed.
   * @returns Head of the created linked list.
   */
  constructListFromArray(array: any[]) {
    this.head = null;
    let currentNode = null;
    const length = array.length;
    for (let i = 0; i < length; i++) {
      const newNode = new LinkedListNode(array[i]);
      if (i === 0) {
        this.head = newNode;
      } else {
        currentNode?.setNext(newNode);
      }
      currentNode = newNode;
    }
    return this.head;
  }

  /**
   * Reverse the given linked list.
   * @returns Head of the reversed linked list.
   */
  reverse(): LinkedListNode | null {
    if (this.head) {
      let previous: LinkedListNode | null = null;
      let current: LinkedListNode | null = this.head;
      let next: LinkedListNode | null = null;
      while (current !== null) {
        next = current.getNext();
        current.setNext(previous);
        previous = current;
        current = next;
      }
      this.head = previous;
    }
    return this.head;
  }

  /**
   * Returns node count in the linked list.
   * @returns Length of the linked list.
   */
  length(): number {
    if (this.head !== null) {
      let length = 0;
      let current: LinkedListNode | null = this.head;
      while (current !== null) {
        length++;
        current = current.getNext();
      }
      return length;
    }
    return 0;
  }

  /**
   * Adds node to the start of the linked list.
   * @param value value to be added at first node.
   * @returns Head of the linked list.
   */
  addFirst(value: any): LinkedListNode | null {
    const newNode = new LinkedListNode(value);
    newNode.setNext(this.head);
    this.head = newNode;
    return this.head;
  }

  /**
   * Appends node to the linked list.
   * @param value value to be added at last node.
   * @returns Head of linked list.
   */
  addLast(value: any): LinkedListNode | null {
    const newNode = new LinkedListNode(value);
    let current: LinkedListNode | null = this.head;
    while (current?.getNext() !== null) {
      current = current ? current.getNext() : null;
    }
    current.setNext(newNode);
    return this.head;
  }

  private addIndex(value: any, index: number): LinkedListNode | null {
    const newNode = new LinkedListNode(value);
    let currentIndex = 0;
    let current: LinkedListNode | null = this.head;
    while (currentIndex < index - 1) {
      current = current ? current.getNext() : null;
      currentIndex++;
    }
    if (current !== null) {
      newNode.setNext(current.getNext());
      current.setNext(newNode);
    }
    return this.head;
  }

  /**
   * Adds the node at a given index. If index is not provided, then it will add node to the last of the linked list.
   * @param value value to be added at a given index
   * @param index index at which node is to be added.
   * @returns Head of linked list.
   */
  add(value: any, index?: number): void {
    if (index != null) {
      if (index === 0) {
        this.addFirst(value);
      } else if (index >= this.length()) {
        this.addLast(value);
      } else {
        this.addIndex(value, index);
      }
    } else {
      this.addLast(value);
    }
  }

  private removeFirst(): LinkedListNode | null {
    if (this.head !== null) {
      let current: LinkedListNode | null = this.head;
      this.head = current.getNext();
      current = null;
    }
    return this.head;
  }

  private removeIndex(index: number): LinkedListNode | null {
    if (this.head !== null) {
      let currentIndex = 0;
      let current: LinkedListNode | null = this.head;
      while (currentIndex < index - 1) {
        current = current ? current.getNext() : null;
        currentIndex++;
      }
      if (current?.getNext() !== null) {
        const next = current !== null ? current.getNext() : null;
        if (next !== null) {
          current?.setNext(next?.getNext());
        }
      }
    }
    return this.head;
  }

  /**
   * Removes the node at a given index. If index is not provided, it will remove a first node.
   * @param index remove index
   * @returns Head of linked list.
   */
  remove(index?: number): void {
    if (index != null) {
      if (index < 0 || index > this.length()) {
        throw new Error(
          "Provided index is not in the range of the linked list !!",
        );
      } else if (index === 0) {
        this.removeFirst();
      } else {
        this.removeIndex(index);
      }
    } else {
      this.removeFirst();
    }
  }

  /**
   * Gets the value of node at a given index.
   * @param index index
   * @returns Value of node at given index.
   */
  getValue(index: number): any {
    if (this.head) {
      let currentIndex = 0;
      let current: LinkedListNode | null = this.head;
      while (currentIndex < index) {
        current = current ? current.getNext() : null;
        currentIndex++;
      }
      return current?.getValue();
    }
    return null;
  }

  /**
   * Update the value of node at a given index.
   * @param newValue New updated value.
   * @param index update index.
   * @returns Head of a linked list.
   */
  update(newValue: any, index: number) {
    if (this.head !== null) {
      let currentIndex = 0;
      let current: LinkedListNode | null = this.head;
      while (currentIndex < index) {
        current = current ? current.getNext() : null;
        currentIndex++;
      }
      current?.setValue(newValue);
    }
    return this.head;
  }

  print(): string {
    if (this.head !== null) {
      const list = [];
      let current: LinkedListNode | null = this.head;
      while (current !== null) {
        list.push(current.getValue());
        current = current.getNext();
      }
      return list.join(" -> ");
    }
    return "";
  }

  /**
   * Return middle node.
   * @returns The middle node of a given list. If linked list has even node count, it will return a node having index (length / 2) + 1.
   */
  getMiddleNode(): LinkedListNode | null {
    if (this.head !== null) {
      let slow: LinkedListNode | null = this.head;
      let fast: LinkedListNode | null = this.head;
      while (fast?.getNext()) {
        slow = slow !== null ? slow.getNext() : slow;
        if (fast.getNext() !== null) {
          const next: any = fast.getNext();
          if (next !== null) {
            fast = next.getNext();
          }
        }
      }
      return slow;
    }
    return null;
  }

  /**
   * Return middle node value.
   * @returns The middle node value of a given list. If linked list has even node count, it will return a node having index (length / 2) + 1.
   */
  getMiddleValue(): any {
    if (this.head !== null) {
      const node = this.getMiddleNode();
      return node?.getValue();
    }
    return null;
  }

  private rotate(position: number): LinkedListNode | null {
    let current: LinkedListNode | null = this.head;
    let currentIndex = 0;
    while (currentIndex < position - 1) {
      current = current ? current.getNext() : null;
      currentIndex++;
    }
    const newHead: LinkedListNode | null =
      current != null ? current?.getNext() : null;
    current?.setNext(null);
    current = newHead;
    while (current?.getNext() != null) {
      current = current.getNext();
    }
    current?.setNext(this.head);
    this.head = newHead;
    return this.head;
  }

  /**
   * Rotates the linked list to the right by given position. If position is negative, then it will rotate it towards left by given position.
   * @param pos Number of position by which the linked list to be rotated. If position is not there, it will rotate it by 1.
   * @returns Head of linked list.
   */
  rotateRight(pos?: number): LinkedListNode | null {
    if (this.head !== null) {
      const length = this.length();
      const position = pos != null ? pos % length : 1;
      if (position === 0) {
        return this.head;
      } else if (position < 0) {
        this.rotate(Math.abs(position));
      } else {
        this.rotate(length - position);
      }
    }
    return null;
  }

  /**
   * Rotates the linked list to the left by given position. If position is negative, then it will rotate it towards right by given position.
   * @param pos Number of position by which the linked list to be rotated. If position is not there, it will rotate it by 1.
   * @returns Head of linked list.
   */
  rotateLeft(pos?: number): LinkedListNode | null {
    if (this.head !== null) {
      const length = this.length();
      const position = pos != null ? pos % length : 1;
      if (position === 0) {
        return this.head;
      } else if (position < 0) {
        this.rotate(length - Math.abs(position));
      } else {
        this.rotate(position);
      }
    }
    return null;
  }

  /**
   * Concatenates second linked list into first one and return the first linked list.
   * @param list Second List
   * @returns First Linked List with merged list
   */
  concat(list: LinkedList) {
    if (this.head !== null) {
      let current: LinkedListNode | null = this.head;
      while (current?.getNext() !== null) {
        if (current != null) {
          current = current.getNext();
        }
      }
      current.setNext(list.head);
      return this;
    } else {
      this.head = list.head;
      return list;
    }
  }
}
