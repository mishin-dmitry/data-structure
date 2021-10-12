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
    const node = new Node(x)

    if (!this.begin) {
      this.begin = node
    } else {
      node.next = this.begin
      this.begin = node
    }
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
    const list = new List()
    list.pushFront(this.begin.x)

    let index = 0
    let tmpNode = this.begin.next?.next

    while (tmpNode) {
      list.insertAfter(list.getAt(index), tmpNode.x)
      if (tmpNode.next?.next) {
        tmpNode = tmpNode.next.next
        index += 1
      } else {
        tmpNode = null
      }
    }

    return list;
  }

  // Returns number of elements in list
  getSize() {
    let count = 0
    let tmpNode = this.begin

    while (tmpNode) {
      count += 1
      tmpNode = tmpNode.next
    }

    return count;
  }

  // This function converts our list to an array. New array is created with values the same as in list.
  toArray() {
    let tmpNode = this.begin
    const result = []

    while (tmpNode) {
      result.push(tmpNode.x)
      tmpNode = tmpNode.next
    } 

    return result;
  }

  // This function removes elements x.next from the list
  // O(1) time is expected
  removeAfter(x) {
    if (x.next?.next) {
      x.next = x.next.next
    } else if (x.next) {
      x.next = null
    }
  }

  // This function inserts new element with value val right after the element x.
  // O(1) time is expected
  insertAfter(x, val) {
    const newNode = new Node(val)

    if (!this.begin) {
      this.begin = newNode
      return
    }

    const tmpNode = x.next

    x.next = newNode
    newNode.next = tmpNode
  }

  // This function removes all elements from the list that are divisible by x.
  // E.g. list {1, 2, 3, 4, 4, 10, 7}  after filterDivisible(2) would look like {1, 3, 7}.
  // O(N) time is expected.
  filterDivisible(x) {
    while (this.begin.x % x === 0) {
      this.begin = this.begin.next
    }

    let tmpNode = this.begin

    while (tmpNode?.next) {
      if (tmpNode.next.x % x === 0) {
        let nextNode = tmpNode.next

        while (nextNode && nextNode.x % x === 0) {
          nextNode = nextNode.next
        }

        tmpNode.next = nextNode
        tmpNode = tmpNode.next
      } else {
        tmpNode = tmpNode.next
      }
    }
  }

  // This function returns Node from the list by index. O(N) time is expected.
  getAt(index) {
    let curIndex = 0
    let tmpNode = this.begin

    while (curIndex != index) {
      tmpNode = tmpNode.next
      curIndex += 1
    }

    return tmpNode;
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