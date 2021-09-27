class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class HashTable {

  constructor(size) {
    this.size = size;
    this.map = new Array(size).fill();
  }

  hash(key) {
    // return a number that fits into the size
    let chars = key.split('');
    return chars.reduce((p, character) => {
      return p + character.charCodeAt(0);
    }, 0) * 599 % this.size;
  }

  set(key, value) {
    // hash the key to get a number
    let bucketNumber = this.hash(key);

    // Add {key:value} node to the linked list
    if (!this.map[bucketNumber]) {
      this.map[bucketNumber] = new LinkedList();
    }

    let entry = { [key]: value };

    // this.map[bucketNumber] is a linked list

    this.map[bucketNumber].add(entry);

  }

  has(key) {
    // hash the key
    let bucketNumber = this.hash(key);

    // Tell you if it's in the table
    if (!this.map[bucketNumber]) { return false; }

    // this is a linked list, so let's traverse it ...
    let current = this.map[bucketNumber].head;
    while (current) {
      let data = current.value;
      if (data[key]) { return true; }
      current = current.next;
    }

    return false;


  }

  get(key) {
    // hash the key
    // find it in the table/linked list and return the value

    // hash the key
    let bucketNumber = this.hash(key);

    // Tell you if it's in the table
    if (!this.map[bucketNumber]) { return null; }

    // this is a linked list, so let's traverse it ...
    let current = this.map[bucketNumber].head;
    while (current) {
      let data = current.value;
      if (data[key]) { return data[key]; }
      current = current.next;
    }

    return null;

  }

}

let myHashTable = new HashTable(16);

myHashTable.set('David', 53);
myHashTable.set('Jess', 53);
myHashTable.set('Jaya', 53);
myHashTable.set('Gina', 53);
myHashTable.set('Rachael', 53);
myHashTable.set('John', 53);
myHashTable.set('Allie', 16);

myHashTable.map.forEach((data, i) => {
  console.log(i, data && data.values());
});

console.log(myHashTable.has('John'));
console.log(myHashTable.has('Freddie'));

console.log(myHashTable.get('David'));
console.log(myHashTable.get('Rosie'));
