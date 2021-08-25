'use strict';

const LinkedList = require('../lib/ll.js');

describe('Linked List Class', () => {

    it('should create an empty ll on instantiation', () => {
      let list = new LinkedList();
      expect(list.head).toEqual(null);
    })

    it('should be able to append a node to the end of the list', () => {
      let list = new LinkedList();
      // some mock test data to test against
      list.append('first');
      expect(list.head.value).toEqual('first');

      list.append('second');
      expect(list.head.next.value).toEqual('second');

      console.log('our final ll', list);
    })
})