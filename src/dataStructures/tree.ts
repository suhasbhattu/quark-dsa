import { Queue } from "./queue";

class TreeNode {
  private value: any;
  private left: TreeNode | null;
  private right: TreeNode | null;

  constructor(value?: any) {
    this.value = value ?? null;
    this.left = null;
    this.right = null;
  }

  getValue() {
    return this.value;
  }

  setValue(value: any) {
    this.value = value;
  }

  getLeft() {
    return this.left;
  }

  setLeft(node: TreeNode | null) {
    this.left = node;
  }

  getRight() {
    return this.right;
  }

  setRight(node: TreeNode | null) {
    this.right = node;
  }
}

export class BinaryTree {
  private root: TreeNode | null;

  constructor(value?: any) {
    this.root = new TreeNode(value ?? null);
  }

  /**
   *
   * @returns Root of the tree
   */
  getRoot() {
    return this.root;
  }

  /**
   * This will set the given value to the root.
   * @param value Value of the root
   */
  setRootValue(value: any) {
    this.getRoot()?.setValue(value);
  }

  /**
   *
   * @param value Value to be inserted/added to the tree.
   * @param path Path of the tree to which new node is inserted. Path should be in the form of "L" and "R". For example, "LRR", means new node
   * should get added to the left->right->right path starting from the root node.
   * @returns Root of the tree.
   */
  insertNode(value: any, path: string) {
    let current = this.root;
    if (path.length === 0) {
      this.root?.setValue(value);
      return this.root;
    }
    let i = 0;
    while (i < path.length) {
      if (path[i].toLowerCase() === "l") {
        if (current?.getLeft() == null) {
          const node = new TreeNode(value);
          current?.setLeft(node);
          break;
        } else {
          current = current.getLeft();
        }
      } else if (path[i].toLowerCase() === "r") {
        if (current?.getRight() == null) {
          const node = new TreeNode(value);
          current?.setRight(node);
          break;
        } else {
          current = current.getRight();
        }
      } else {
        throw new Error("Path should only contains L and R !!");
      }
      i++;
    }
    return this.root;
  }

  private traverseInorder(node: TreeNode | null, list: any[]) {
    if (node == null) {
      return;
    }
    this.traverseInorder(node.getLeft(), list);
    list.push(node.getValue());
    this.traverseInorder(node.getRight(), list);
  }

  /**
   * Traverse tree in an inorder manner.
   * @returns Returns the list of node values in an inorder manner.
   */
  inorder() {
    const list: any[] = [];
    this.traverseInorder(this.root, list);
    return list;
  }

  private traversePreorder(node: TreeNode | null, list: any[]) {
    if (node == null) {
      return;
    }
    list.push(node.getValue());
    this.traversePreorder(node.getLeft(), list);
    this.traversePreorder(node.getRight(), list);
  }

  /**
   * Traverse tree in a preorder manner.
   * @returns Returns the list of node values in a preorder manner.
   */
  preorder() {
    const list: any[] = [];
    this.traversePreorder(this.root, list);
    return list;
  }

  private traversePostorder(node: TreeNode | null, list: any[]) {
    if (node == null) {
      return;
    }
    this.traversePostorder(node.getLeft(), list);
    this.traversePostorder(node.getRight(), list);
    list.push(node.getValue());
  }

  /**
   * Traverse tree in a postorder manner.
   * @returns Returns the list of node values in a postorder manner.
   */
  postorder() {
    const list: any[] = [];
    this.traversePostorder(this.root, list);
    return list;
  }

  /**
   * Traverse tree in a level order (Breadth First Search) manner.
   * @returns Returns the list of node values in a level order manner.
   */
  levelOrder() {
    const queue = new Queue();
    const list: any[] = [];
    queue.enqueue(this.getRoot());
    while (!queue.isEmpty()) {
      const temp = queue.dequeue();
      list.push(temp.getValue());
      if (temp.getLeft() != null) {
        queue.enqueue(temp.getLeft());
      }
      if (temp.getRight() != null) {
        queue.enqueue(temp.getRight());
      }
    }
    return list;
  }

  private getHeight(node: TreeNode | null): number {
    if (node == null) {
      return 0;
    }
    return (
      1 +
      Math.max(this.getHeight(node.getLeft()), this.getHeight(node.getRight()))
    );
  }

  /**
   * @returns Returns Height of the tree.
   */
  height() {
    return this.getHeight(this.root);
  }

  /**
   * @param node Tree Node
   * @returns Returns Height of the node in the tree.
   */
  nodeHeight(node: TreeNode | null) {
    return this.getHeight(node);
  }

  private invertTree(node: TreeNode | null) {
    if (node == null) {
      return node;
    }
    const left = this.invertTree(node.getLeft());
    const right = this.invertTree(node.getRight());
    node.setLeft(right);
    node.setRight(left);
    return node;
  }

  /**
   * Performs tree inversion (or mirror image)
   * @returns Root of the inverted tree.
   */
  invert() {
    return this.invertTree(this.getRoot());
  }

  /**
   *
   * @param value the new value needs to be updated
   * @param path Path of the node, it should be in the form of 'L' and 'R'. For example, 'LRL' means traversal path should be left->right->left
   * staring from the root node.
   * @returns Root of the tree.
   */
  updateNode(value: any, path: string) {
    if (path.length === 0) {
      this.setRootValue(value);
      return this.root;
    }
    let i = 0;
    let current = this.getRoot();
    while (i < path.length) {
      const branch = path[i].toLowerCase();
      if (branch === "l" && current != null) {
        current = current.getLeft();
      } else if (branch === "r" && current != null) {
        current = current.getRight();
      } else if (branch !== "l" && branch !== "r") {
        throw new Error("Path should only contains L and R !!");
      }
      i++;
    }
    if (current == null) {
      throw new Error("No node exists at this path !!");
    } else {
      current?.setValue(value);
    }
    return this.root;
  }

  /**
   * This will delete the node of tree of the given path.
   * @param path Path of the node to be deleted. Path of the node, it should be in the form of 'L' and 'R'. For example, 'LRL' means traversal path should be left->right->left
   * staring from the root node.
   * @returns Root of the tree.
   */
  deleteNode(path: string) {
    if (path.length === 0) {
      this.root = null;
      return null;
    }
    let i = 0;
    let current = this.getRoot();
    while (i < path.length - 1) {
      const branch = path[i].toLowerCase();
      if (branch === "l" && current != null) {
        current = current.getLeft();
      } else if (branch === "r" && current != null) {
        current = current.getRight();
      } else if (branch !== "l" && branch !== "r") {
        throw new Error("Path should only contains L and R !!");
      }
      i++;
    }
    if (current == null) {
      throw new Error("No node exists at this path !!");
    } else if (path[path.length - 1].toLowerCase() === "l") {
      current.setLeft(null);
    } else if (path[path.length - 1].toLowerCase() === "r") {
      current.setRight(null);
    } else {
      throw new Error("Path should only contains L and R !!");
    }
    return this.root;
  }
}
