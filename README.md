## quark-dsa

The Quark-dsa is a JavaScript utility library for data structures and operations on it. It is built using TypeScript and includes data structures Stack, Queue, Tree, Graph and many more.

All documentation for this library can be found [here](https://quark-dsa-docs.vercel.app/).

## Install

```sh
npm install quark-dsa
```

## Usage

There are several utility functions in quark-dsa, those you can use for performing data structures and operations.

- String: Check if string is palindrome and reverse the string are supported.
  
    **Reverse the string**
    ```sh
    import { reverseString } from "quark-dsa";
    
    let str = "quark";
    reverseString(str); // returns 'krauq'
    ```
    **Check a string is palindrome**
    ```sh
    import { isStringPalindrome } from "quark-dsa";
    
    let str = "racecar";
    isStringPalindrome(str); // returns true;
    ```
- Number: Check if number is palindrome, reverse the number and check if number is prime is supported.

  **Reverse the number**
  ```sh
  import { reverseNumber } from "quark-dsa";
  
  let num = 5698;
  reverseNumber(num); // returns 8965
  ```
  **Check a number is prime number**
  ```sh
  import { isPrime } from "quark-dsa";
 
  let num = 37019;
  isPrime(num); // returns true;
  ```
  **Check a number is palindrome**
  ```sh
  import { isNumberPalindrome } from "quark-dsa";
 
  let num = 1562651;
  isNumberPalindrome(num); // returns true;
  ```
- Array: Remove duplicates from an array and calculation of mean, median and mode are supported.

  **Mean (Average Calculation)**
  You can calculate the mean of a list. Supported mean types are `arithmetic`, `geometric`, `harmonic` and `rms (root mean square)`. By default `arithmetic` is selected.
  ```sh
  import { mean } from "quark-dsa";
 
  let list = [2, 6, 4, 5, 8];
  mean(list); // returns 5
  mean(list, "geometric"); // returns 4.54
  mean(list, "harmonic"); // returns 4.03
  mean(list, "rms"); // returns 5.39
  ```
  **Median**
  You can calculate middle value of the list, which is median. If list has even number of items, it will return average of middle two values, otherwise it will return middle value. List will get sorted in ascending order before median calculation.
  ```sh
  import { median } from "quark-dsa";
 
  let list = [4, 12, 14, 17, 22, 23, 23, 24, 25, 29, 40, 67, 77, 82, 92];
  median(list); // returns 24
  let list2 = [142, 140, 130, 150, 160, 135, 158, 132];
  median(list2); // returns 141
  ```
  **Mode**
  You can also get the element having highest frequency in the list, which is mode. If the list has only one mode, then it will return as a number. If the list has more than one modes, then it will return all mode values in an array.
  ```sh
  import { mode } from "quark-dsa";
 
  let list = [3, 3, 6, 9, 16, 16, 16, 27, 27, 37, 48];
  mode(list); // returns 16
  let list2 = [3, 3, 3, 9, 16, 16, 16, 27, 37, 48];
  mode(list2); // returns [3, 16]
  ```
  **Remove duplicates**
  You can remove duplicates from a list and returns the same list. Here, in place operation is performed on the list. Only numbers and strings are supported in the list.
  ```sh
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
