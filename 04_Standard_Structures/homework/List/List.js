class Node {
  constructor(x) {
    this.x = x;
    this.next = null;
  }
}

class List {
  // Pointer to the beginning of the list
  constructor() {
    this.begin = null
  }

  // Adds element to the beginning of the list
  pushFront(x) {
    /* TODO IMPLEMENT THIS */
  }

  // This function could be useful for debugging and testing.
  print() {
    n = this.begin;
    while (n != null) {
      console.log(n.x + ' ');
      n = n.next;
    }
    console.log('\n');
  }

  // This function should return copy of the list where every second element is removed. Initial list should not be changed.
  // E.g. if we run copyEverySecond on list [1, 2, 3, 4, 5, 6, 7, 100, 120, 162, 0, 1] new list with values [1, 3, 5, 7, 120, 0] should be returned.
  copyEverySecond() {
    /* TODO IMPLEMENT THIS */
    return new List;
  }

  // Returns number of elements in list
  getSize() {
    /* TODO IMPLEMENT THIS */
    return 0;
  }

  // This function converts our list to an array. New array is created with values the same as in list.
  toArray() {
    /* TODO IMPLEMENT THIS */
    return new Array;
  }

  // This function removes elements x.next from the list
  // O(1) time is expected
  removeAfter(x) {
    /* TODO IMPLEMENT THIS */
  }

  // This function inserts new element with value val right after the element x.
  // O(1) time is expected
  insertAfter(x, val) {
    /* TODO IMPLEMENT THIS */
  }

  // This function removes all elements from the list that are divisible by x.
  // E.g. list {1, 2, 3, 4, 4, 10, 7}  after filterDivisible(2) would look like {1, 3, 7}.
  // O(N) time is expected.
  filterDivisible(x) {
    /* TODO IMPLEMENT THIS */
  }

  // This function returns Node from the list by index. O(N) time is expected.
  getAt(index) {
    /* TODO IMPLEMENT THIS */
    return null;
  }

  static fromArray = function(arr) {
    const list = new List();
    for (let i = arr.length - 1; i >= 0; --i) {
      list.pushFront(arr[i]);
    }
    return list;
  }
}

module.exports = {
  List, Node
}