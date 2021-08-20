'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;   
  }

  append(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      // this is where the traversal happens - HINT HINT
      let current = this.head;

      // this is the core/fundamental way to traverse a LL
      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }

    // give me back the linked list
    return this;
  }
}

module.exports = LinkedList;



