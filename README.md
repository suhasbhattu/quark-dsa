## quark-dsa
The Quark-dsa is a JavaScript utility library for data structures and operations on it. It is built using TypeScript and includes data structures Stack, Queue, Tree, Graph and many more.

## Install
```sh
npm install quark-dsa
```

## Usage
There are several utility functions in quark-dsa, those you can use for performing data structures and operations.
```js
import { isPrime } from "quark-dsa";

console.log(isPrime(37019));
```

## Highlights
quark-dsa provides following data startuctures and common operations (more work is going on...):
- Stack: Basic push, pop, peek, length and serach operations are supported.
```js
import { Stack } from "quark-dsa";

const stack = new Stack();
stack.push(12);
stack.pop();
stack.length(); // should return 0;
```
- Queue: Basic enqueue, dequeue, length and search operations are suuported.
```js
import { Queue } from "quark-dsa";

const queue = new Queue();
queue.enqueue(3);
stack.dequeue();
queue.length(); // should return 0;
```
- Linked List: Construct, add node, update node, delete node, reverse, concat, get middle node, rotate operations are supported.
```js
import { LinkedList } from "quark-dsa";

const list = new LinkedList([43, 65, 89, 21]);
list.length(); // should return 3;
list.remove(1); // deletes node having index 1;
list.rotateRight(2); // rotates linked list to the right by 2 position;
```
quark-dsa also provides commonly used algorithms as utility functions.
- Searching: Linear and Binary search algorithms are added to give position of key in the list.
```js
import { LinearSearch, BinarySearch } from "quark-dsa";

LinearSearch([14, 10, 22, 16, 40], 16); // should return 3
BinarySearch([14, 10, 22, 16, 40], 40); // should return 4
```
quark-dsa provides sorting algorithms as utility functions.
- Sorting: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Radix Sort.
```js
import { BubbleSort, SelectionSort, InsertionSort, MergeSort, QuickSort, RadixSort } from "quark-dsa";

const list = [20, 12, 10, 15, 2];
BubbleSort(list); // Should change list to [2, 10, 12, 15, 20].
const list2 = [-2, 45, 0, 11, -9];
SelectionSort(list2, true); // Second parameter is for descending order. Should change list2 to [45, 11, 0, -2, -9].
const list3 = ["John", "paul", "George", "Ringo"];
QuickSort(list3); // Strings are also getting sorted by this utility functions. Should change list3 to [George, John, paul, Ringo].
const list4 = [121, 432, 564, 23, 1, 45, 788];
RadixSort(list4); // Radix sort is written only for numbers. Should change list4 to [1, 23, 45, 121, 432, 564, 788].
```