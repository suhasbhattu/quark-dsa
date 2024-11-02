## quark-dsa

The Quark-dsa is a JavaScript utility library for data structures and operations on it. It is built using TypeScript and includes data structures Stack, Queue, Tree, Graph and many more.

All documentation for this library can be found [here](https://quark-dsa-docs.vercel.app/).

## Install

```sh
npm install quark-dsa
```

## Usage

There are several utility functions in quark-dsa, those you can use for performing data structures and operations.

- String:

  **Reverse the string**

  ```js
  import { reverseString } from "quark-dsa";

  let str = "quark";
  reverseString(str); // returns 'krauq'
  ```

  **Check a string is palindrome**

  ```js
  import { isStringPalindrome } from "quark-dsa";

  let str = "racecar";
  isStringPalindrome(str); // returns true;
  ```

  **Sort the string**

  ```js
  import { sortString } from "quark-dsa";

  let str = "mississippi";
  sortString(str); //returns iiiimppssss
  ```

  **Words list in the sentence**

  ```js
  import { getWords } from "quark-dsa";

  let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
  getWords(str); //returns ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"]
  ```

- Number:

  **Reverse the number**

  ```js
  import { reverseNumber } from "quark-dsa";

  let num = 5698;
  reverseNumber(num); // returns 8965
  ```

  **Check a number is prime number**

  ```js
  import { isPrime } from "quark-dsa";

  let num = 37019;
  isPrime(num); // returns true;
  ```

  **Check a number is palindrome**

  ```js
  import { isNumberPalindrome } from "quark-dsa";

  let num = 1562651;
  isNumberPalindrome(num); // returns true;
  ```

  **Factorial of a number**

  ```js
  import { factorial } from "quark-dsa";

  factorial(5); // returns 120;
  factorial(15); // returns 1307674368000
  ```

  **Permutations of the list**

  You can get number of possibilities of selecting k entities out of set of n entities. It will give you the result of `nPk`.

  ```js
  import { permutations } from "quark-dsa";

  permutations(5, 2); //returns 20
  permutations(12, 2); // returns 132
  ```

  **Combinations of the list**

  You can get number of arrangements of k entities out of set of n entities. It will give you the result of `nCk`

  ```js
  import { combinations } from "quark-dsa";

  combinations(5, 2); //returns 10
  combinations(12, 2); // returns 66
  ```

- Array:

  **Mean (Average Calculation)**

  You can calculate the mean of a list. Supported mean types are `arithmetic`, `geometric`, `harmonic` and `rms (root mean square)`. By default `arithmetic` is selected.

  ```js
  import { mean } from "quark-dsa";

  let list = [2, 6, 4, 5, 8];
  mean(list); // returns 5
  mean(list, "geometric"); // returns 4.54
  mean(list, "harmonic"); // returns 4.03
  mean(list, "rms"); // returns 5.39
  ```

  **Median**

  You can calculate middle value of the list, which is median. If list has even number of items, it will return average of middle two values, otherwise it will return middle value. List will get sorted in ascending order before median calculation.

  ```js
  import { median } from "quark-dsa";

  let list = [4, 12, 14, 17, 22, 23, 23, 24, 25, 29, 40, 67, 77, 82, 92];
  median(list); // returns 24
  let list2 = [142, 140, 130, 150, 160, 135, 158, 132];
  median(list2); // returns 141
  ```

  **Mode**

  You can also get the element having highest frequency in the list, which is mode. If the list has only one mode, then it will return as a number. If the list has more than one modes, then it will return all mode values in an array.

  ```js
  import { mode } from "quark-dsa";

  let list = [3, 3, 6, 9, 16, 16, 16, 27, 27, 37, 48];
  mode(list); // returns 16
  let list2 = [3, 3, 3, 9, 16, 16, 16, 27, 37, 48];
  mode(list2); // returns [3, 16]
  ```

  **Variance and Standard Variation**

  You can also calculate Variance and Standard Variation of the list.

  ```js
  import { variance, standardDeviation } from "quark-dsa";

  let list = [46, 69, 32, 60, 52, 41];
  variance(list); // returns 177.2
  standardDeviation(list); // returns 13.31
  let list2 = [4, 2, 5, 8, 6];
  variance(list2); // returns 5
  standardDeviation(list2); // returns 2.24
  ```

  **Remove duplicates**

  You can remove duplicates from a list and returns the same list. Here, in place operation is performed on the list. Only numbers and strings are supported in the list.

  ```js
  import { removeDuplicates } from "quark-dsa";

  let list = [1, 2, 3, 3, 2, 1, 4, 5, 1, 5, 8, 3];
  removeDuplicates(list); // returns [1, 2, 3, 4, 5, 8];
  let list2 = [
    "John",
    "George",
    "Paul",
    "Ringo",
    "George",
    "Bob",
    "Elvis",
    "Freddie",
    "Paul",
  ];
  removeDuplicates(list2); // returns ["John", "George", "Paul", "Ringo", "Bob","Elvis", "Freddie"]
  ```

  **Histogram**

  You can get the object of occurence of all items in the list.

  ```js
  import { histogram } from "quark-dsa";

  let list = [3, 3, 3, 9, 16, 16, 16, 27, 37, 48];
  histogram(list); // returns {"3": 3, "9": 1, "16": 3, "27": 1, "37": 1, "48": 1}
  ```

  **Greatest Common Divisor (GCD) and Least Common Multiples (LCM) of an array**

  You can calculate GCD and LCM of an array.

  ```js
  import { gcd, lcm } from "quark-dsa";

  let list = [8, 12, 16];
  gcd(list); // returns 4
  let list2 = [12, 18, 24];
  lcm(list2); // returns 72
  ```

  **Matrix Operations**

  You can also perform matrix operations like addition, subtraction and multiplication on the n\*n arrays.

  ```js
  import {
    matrixAddition,
    matrixSubtraction,
    matrixMultiplication,
    matrixDeterminant,
  } from "quark-dsa";

  let list = [
    [2, 4, 3],
    [5, 7, 8],
    [9, 6, 7],
  ];
  let list2 = [
    [3, 5, 7],
    [8, 3, 4],
    [5, 7, 8],
  ];
  matrixAddition(list, list2); // returns [[5, 9, 10], [13, 10, 12], [14, 13, 15]]
  matrixSubtraction(list, list2); // returns [[-1, -1, -4], [-3, 4, 4], [4, -1, -1]]
  matrixMultiplication(list, list2); // returns [[53, 43, 54], [111, 102, 127], [110, 112, 143]]
  matrixDeterminant(list); // returns 51
  ```

## Highlights

quark-dsa provides following data startuctures and common operations (more work is going on...):

- Stack: Basic push, pop, peek, length and serach operations are supported.
- Queue: Basic enqueue, dequeue, length and search operations are supported.
- Linked List: Construct, add node, update node, delete node, reverse, concat, get middle node, rotate operations are supported.
- Binary Tree: Construct, insert/update/delete node of the tree. Traversal paths of the tree (preorder, inorder, postorder, level order traversal), inverting the tree.

quark-dsa also provides commonly used algorithms as utility functions.

- Searching: Linear and Binary search algorithms are added to give position of key in the list.

quark-dsa provides sorting algorithms as utility functions.

- Sorting: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Radix Sort.

## Stack

### Initialize the stack

You can create a stack with the given size. Size is optional argument with the default value 65535.

```js
import { Stack } from "quark-dsa";

const stack = new Stack(200); // Creates stack with size 200.
```

### Supported methods

| Method         | Description                                                                                                                                              | Returns                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `push(item)`   | Pushes the item onto the top of the stack.                                                                                                               | void                                                                                  |
| `pop()`        | Removes the item at the top this stack and returns it.                                                                                                   | popped item                                                                           |
| `isEmpty()`    | Checks if the stack is empty                                                                                                                             | `true` if stack is empty otherwise `false`                                            |
| `peek()`       | Returns the top item from the stack without removing it                                                                                                  | top element of the stack                                                              |
| `length()`     | Returns the length of the stack. Length is different than size. Size is the maximum limit of the stack, while length is the count of items in the stack. | length of the stack                                                                   |
| `search(item)` | Returns the 0-based position of the item in the stack.                                                                                                   | returns the position of the item in the stack. If item is absent, it will return `-1` |

### Usage

```js
import { Stack } from "quark-dsa";

const stack = new Stack(); // new stack is created.
stack.push(23); // pushes 23 to the top of the stack.
stack.push(36); // pushes 36 to the top of the stack.
stack.length(); // returns 2;
stack.search(36); // returns 1;
stack.search(98); // returns -1;
stack.pop(); // removes top element from the stack and returns it.
stack.peek(); // returns the top element of the stack, 23.
stack.length(); // returns 1;
stack.pop(); // removes top element from the stack and returns it.
stack.isEmpty(); // returns true as stack is empty now.
```

## Queue

### Initialize the queue

You can create a queue with the given size. Size is optional argument with the default value 65535.

```js
import { Queue } from "quark-dsa";

const queue = new Queue(200); // Creates queue with size 200.
```

### Supported methods

| Method          | Description                                                                             | Returns                                                                               |
| --------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `enqueue(item)` | Inserts an item at the rear of the queue.                                               | void                                                                                  |
| `dequeue()`     | Removes an item from the front of the queue and returns it.                             | dequeued item                                                                         |
| `getFront()`    | Returns the front item of the queue.                                                    | front item of the queue                                                               |
| `getRear()`     | Returns the rear item of the queue.                                                     | rear item of the queue                                                                |
| `isEmpty()`     | Checks if the queue is empty                                                            | `true` if queue is empty otherwise `false`                                            |
| `isFull()`      | Checks if the queue is full. It will check if length of the queue is equal to its size. | `true` if queue is full otherwise `false`                                             |
| `length()`      | Gets the length of the queue. It is difference between rear and front of the queue.     | length of the queue                                                                   |
| `search(item)`  | Returns the 0-based position of the item in the queue.                                  | returns the position of the item in the queue. If item is absent, it will return `-1` |

### Usage

```js
import { Queue } from "quark-dsa";

const queue = new Queue(); // new queue is created.
queue.enqueue(3); // inserts 3 to the rear of the queue.
queue.enqueue(8); // inserts 8 to the rear of the queue.
queue.length(); // returns 2;
queue.search(8); // returns 1;
queue.search(98); // returns -1;
queue.dequeue(); // removes the front item of the queue and then returns it.
queue.getFront(); // returns the front item of the queue, 8.
queue.enqueue(10); // inserts 10 to the rear of the queue.
queue.getRear(); // returns the rear item of the queue, 10.
queue.dequeue(); // removes the front item of the queue and then returns it.
queue.dequeue(); // removes the front item of the queue and then returns it.
queue.length(); // returns 0;
queue.isEmpty(); // returns true as queue is empty now.
```

## Linked List

### Initialize the linked list

You can create an empty linked list or you can pass an array which will convert an array to an linked list.

```js
import { LinkedList } from "quark-dsa";

const list = new LinkedList(); // returns an empty linked list.

or;

const list = new LinkedList([17, 2, 96, 55, 40]); // returns a linked list with array elements inserted sequentially.
```

### Supported methods

| Method                              | Description                                                                                                               | Returns                                     |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `constructListFromArray(itemsList)` | Constructs a linked list from an array                                                                                    | returns the head of the linked list         |
| `reverse()`                         | Reverse the linked list.                                                                                                  | eturns the head of the reversed linked list |
| `length()`                          | Calculates the length of the linked list.                                                                                 | returns the node count of the linked list   |
| `addFirst(value)`                   | Adds node to the first position of the linked list.                                                                       | returns the head of the linked list         |
| `addLast(value)`                    | Adds node to the last position of the linked list.                                                                        | returns the head of the linked list         |
| `add(value, index)`                 | Adds node to the given index of the linked list. If index is not given, it will insert node at last.                      | returns the head of the linked list         |
| `remove(index)`                     | Removes the node at given index of the linked list. If index is not given, it will remove node at first.                  | returns the head of the linked list         |
| `getValue(index)`                   | Returns the value of the node at the given index.                                                                         | returns value of the node                   |
| `update(value, index)`              | Updates the value of the node at the given index.                                                                         | returns the head of the linked list         |
| `print()`                           | Returns the value of the node separated by `->`                                                                           | returns the linked list in string format    |
| `getMiddleNode()`                   | Returns the middle node of the linked list.                                                                               | returns the middle node                     |
| `getMiddleValue()`                  | Returns the value of the middle node of the linked list.                                                                  | returns the value of the middle node        |
| `rotateRight(position)`             | Rotates the linked list to right by position times. If position is negative, it will rotate the linked list towards left. | returns the head of the rotated list        |
| `rotateLeft(position)`              | Rotates the linked list to left by position times. If position is negative, it will rotate the linked list towards right. | returns the head of the rotated list        |
| `concat(list)`                      | Concatenates the second linked list into first one and return the first linked list.                                      | returns the head of the first linked list   |

### Usage

```js
import { LinkedList } from "quark-dsa";

const list = new LinkedList([17, 2, 96, 55, 40]); // returns a linked list with array elements inserted sequentially.
list.print(); // returns the value in the console log "17 -> 2 -> 96 -> 55 -> 40".
list.add(3); // inserts 3 at last of the linked list.
list.update(45, 3); // updates node of index 3 with value 45.
list.remove(5); // removes node at index 5;
list.reverse(); // reverse the list.
list.getMiddleValue(); // returns the middle value of the list, 96.
list.rotateRight(4); // rotates the list to 4 positions towards right.
list.rotateLeft(5); // rotates the list to 5 positions towards left.

const list2 = new LinkedList([89, 21, 63, 45]); // returns a linked list with array elements inserted sequentially.
list.concat(list2); // returns list with concatenated values of list2.
```

## Binary Tree

### Initialize the binary tree

You can create a tree with the root value. If the root value is not given, an empty node is created and set as a root of the tree.

```js
import { BinaryTree } from "quark-dsa";

const tree = new BinaryTree(5); // The binary tree with root value as 5 is created.
const tree2 = new BinaryTree(); // The binary tree is created with root value set as null.
```

For performing operations on a node in the tree, we need to provide the path of the node. Path of the node should be in the format of `L` and `R`. For example, path `LRRL` means node of having path Left -> Right -> Right -> Left from the root node. Any characters other than `L` and `R` with throw an error.

### Supported methods

| Method                    | Description                                                                                                                                                                                                                      | Returns                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| `getRoot()`               | Gets the root of the tree.                                                                                                                                                                                                       | Root node of the tree.                         |
| `setRootValue(value)`     | Sets the given value to the root node.                                                                                                                                                                                           | void                                           |
| `insertNode(value, path)` | Inserts the value to the given path starting from the root. If the path is an empty string, then it will insert value as a root. Path should be in the form of `L` and `R`. Any characters other than these will throw an error. | Root of the tree                               |
| `inorder()`               | Performs the inorder traversal on the tree.                                                                                                                                                                                      | List of all node values in inorder manner.     |
| `preorder()`              | Performs the preorder traversal on the tree.                                                                                                                                                                                     | List of all node values in preorder manner.    |
| `postorder()`             | Performs the postorder traversal on the tree.                                                                                                                                                                                    | List of all node values in postorder manner.   |
| `levelOrder()`            | Performs the level order traversal (breadth first search) on the tree.                                                                                                                                                           | List of all node values in level order manner. |
| `height()`                | Calculates the height of the tree. Height is the number of edges in the tree from root to the deepest node.                                                                                                                      | Height of the tree                             |
| `nodeHeight()`            | Calculates the height of the given node.                                                                                                                                                                                         | Height of the node                             |
| `invert()`                | Constructs the invert (mirror image) of the given tree.                                                                                                                                                                          | The root of the inverted tree                  |
| `updateNode(value, path)` | Updates the node value of a given path. If the path is an empty string, then it will update the root node value. Path should be in the form of `L` and `R`. Any characters other than these will throw an error.                 | Root of the tree                               |
| `deleteNode(path)`        | Deletes the node of a given path. This will delete node and also its children. Path should be in the form of `L` and `R`. Any characters other than these will throw an error.                                                   | Root of the tree                               |

### Usage

```js
import { BinaryTree } from "quark-dsa";

const tree = new BinaryTree(5); // Constructs a tree with 5 as a root node value.
tree.insertNode(3, "L"); // Inserts a node with value 3 on left of root.
tree.insertNode(9, "R"); // Inserts a node with value 9 on right of root.
tree.insertNode(5, "LR"); // Inserts a node with value 5 on right of 3.
tree.insertNode(7, "RL"); // Inserts a node with value 7 on left of 9.
tree.insertNode(6, "RLL"); // Inserts a node with value 6 on left on 7.
tree.insertNode(8, "RLR"); // Inserts a node with value 8 on right on 7.
tree.insertNode(12, "RR"); // Inserts a node with value 12 on right on 9.
tree.insertNode(20, "RRR"); // Inserts a node with value 20 on right on 12.
tree.inorder(); // Should return [3, 5, 5, 6, 7, 8, 9, 12, 20].
tree.preorder(); // Should return [5, 3, 5, 9, 7, 6, 8, 12, 20].
tree.postorder(); // Should return [5, 3, 6, 8, 7, 20, 12, 9, 5].
tree.levelOrder(); // Should return [5, 3, 9, 5, 7, 12, 6, 8, 20].
tree.height(); // Should return 4.
tree.updateNode(13, ""); // Should update root node with value 13.
tree.preorder(); // Should return [13, 3, 5, 9, 7, 6, 8, 12, 20].
tree.updateNode(31, "RLR"); // Updates the node with value 8 with 31.
tree.preorder(); // Should return [13, 3, 5, 9, 7, 6, 31, 12, 20].
tree.deleteNode("RR"); // Should delete the node 12.
tree.inorder(); // Should return [3, 5, 13, 6, 7, 31, 9].
tree.deleteNode("RLL"); // Should delete the node 6.
tree.inorder(); // Should return [3, 5, 13, 7, 31, 9].
tree.invert(); // Construct the invert (mirror) of the tree.
tree.inorder(); // Shoud return [9, 31, 7, 13, 5, 3].
```

## Binary Search Tree

### Initialize the binary search tree

You can create a binary search tree with the list of node values or insert each node at a time.

```js
import { BinarySearchTree } from "quark-dsa";

const tree = new BinarySearchTree([8, 3, 10, 6, 1, 4, 14, 7]); // This will create a binary search tree with node 8 as a root.
const root = tree.getRoot(); // It will return the root of the tree.
tree.insert(15); // It will insert node with value 15 in the tree.
```

### Supported methods

| Method          | Description                                                                                                 | Returns                                        |
| --------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | --- |
| `getRoot()`     | Gets the root of the tree.                                                                                  | Root node of the tree.                         |
| `insert(value)` | Inserts the node with the given value in the binary search tree.                                            | Inserted node of the tree                      |
| `inorder()`     | Performs the inorder traversal on the tree.                                                                 | List of all node values in inorder manner.     |
| `preorder()`    | Performs the preorder traversal on the tree.                                                                | List of all node values in preorder manner.    |
| `postorder()`   | Performs the postorder traversal on the tree.                                                               | List of all node values in postorder manner.   |
| `levelOrder()`  | Performs the level order traversal (breadth first search) on the tree.                                      | List of all node values in level order manner. |
| `height()`      | Calculates the height of the tree. Height is the number of edges in the tree from root to the deepest node. | Height of the tree                             |
| `nodeHeight()`  | Calculates the height of the given node.                                                                    | Height of the node                             |     |

### Usage

```js
import { BinarySearchTree } from "quark-dsa";

const tree = new BinarySearchTree([8, 3, 10, 6, 1, 4, 14, 7]); // Constructs a tree with 8 as a root node value.
tree.inorder(); // Should return [1, 3, 4, 6, 7, 8, 10, 14].
tree.preorder(); // Should return [8, 3, 1, 6, 4, 7, 10, 14].
tree.postorder(); // Should return [1, 4, 7, 6, 3, 14, 10, 8].
tree.insert(13); // Insert 13 in the tree.
tree.inorder(); // Should return [1, 3, 4, 6, 7, 8, 10, 13, 14].
tree.preorder(); // Should return [8, 3, 1, 6, 4, 7, 10, 14, 13].
tree.postorder(); // Should return [1, 4, 7, 6, 3, 13, 14, 10, 8].
tree.levelOrder(); // Should return [8, 3, 10, 1, 6, 14, 4, 7, 13].
tree.height(); // Should return 4.
```

## Search

Quark-dsa supports Linear Search and Binary Search operations. You can pass the list and search key, it will return the position of the search key in the list.

### Linear Search

Linear Search iterates over the list and returns the position of the search key in the list. If the search key is not present in the list, it will return `-1`.

```js
import { LinearSearch } from "quark-dsa";

const list = [20, 12, 10, 15, 2];
LinearSearch(list, 15); // returns 3;
LinearSearch(list, 58); // returns -1;
```

### Binary Search

Binary Search compares the search key with the middle value of the list and then partitions the list depending on the search key will be in the left or right partition. The important pre-requisite for the Binary Search is that the list should be in ascending order, otherwise it will throw an error. If the search key is not present in the list, it will return `-1`.

```js
import { BinarySearch } from "quark-dsa";

const list = [2, 10, 12, 15, 20];
BinarySearch(list, 15); // returns 3;
BinarySearch(list, 58); // returns -1;
```

## Sort

Quark-dsa supports different sorting algorithms including the bubble sort, insertion sort, selection sort, mergesort, quicksort and radix sort.

```js
import {
  BubbleSort,
  InsertionSort,
  SelectionSort,
  MergeSort,
  QuickSort,
  RadixSort,
} from "quark-dsa";

const list = [-2, 45, 0, 11, -9];
BubbleSort(list); // returns [-9, -2, 0, 11, 45]
InsertionSort(list); // returns [-9, -2, 0, 11, 45]
SelectionSort(list); // returns [-9, -2, 0, 11, 45]
MergeSort(list); // returns [-9, -2, 0, 11, 45]
QuickSort(list); // returns [-9, -2, 0, 11, 45]
RadixSort(list); // returns [-9, -2, 0, 11, 45]
```
