class Node {
  constructor(x) {
    this.x = x;
    this.next = null;
    this.prev = null;
  }
}

class DLList {
  constructor() {
    // You should store pointer to the first element of the list here
    this.begin = null;
    // You should store pointer to the last element of the list here
    this.end = null;
  }

  // This function should add new element with value x to the front of the list
  pushFront(x) {
  }

  // This function should add new element with value x to the end of the list
  pushBack(x) {
  }

  // This function could be useful for debug purposes
  print() {
    let n = this.begin;
    while (n != null) {
      console.log(n.x + ' ');
      n = n.next;
    }
    console.log('')
  }

  // This function should return the number of element in the list
  getSize() {
  }

  // This function should return an array with values the same as in list
  toArray() {
  }

  // This function should remove the element x from the list
  remove(x) {
  }

  // This function should remove first element in the list and return its value
  popFront() {
  }

  // This function should remove last element in the list and return its value
  popBack() {
  }

  // This function should insert element with the value val after the element x
  insertAfter(x, val) {
  }

  // This function should return element at index
  getAt(index) {
  }

  // This function construct list from the array
  static fromArray(a) {
    const l = new DLList();
    for (let i = 0; i < a.length; ++i) {
      l.pushBack(a[i]);
    }
    return l;
  }
}

function main() {
  const dllist = new DLList();
}

main();

module.exports = {
  DLList
}
