'use strict';

[1,2,3,4,5,6,7,87].sort();

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    // Read Data, Go Left, Go Right
    let results = [];

    let _walk = node => {
      results.push(node.value)
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    }

    _walk(this.root);
    return results;
  }

  inOrder() {
    // Go Left, Read Data, Go Right

    // same as above with the placement of handling of each node
    // in between our recursive _walk function calls
  }

  postOrder() {
    // Go Left, Go Right, Read Data

    // same as above with the placement of handling of each node
    // after our recursive _walk function calls
  }
}

module.exports = BinaryTree;