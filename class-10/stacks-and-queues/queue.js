
'use strict';

class Queue {
  constructor() {
    this.length = 0;
    this.next = null;
  }

  enqueue(value) {
    this[this.length] = value;
    this.length++;

    return this;
  }
}

let queue = new Queue();
