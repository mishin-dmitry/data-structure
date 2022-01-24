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
    const newNode = new Node(x)

    if (!this.begin && !this.end) {
      this.begin = newNode
      this.end = newNode

      return
    }

    if (this.getSize() === 1) {
      this.end.prev = newNode
      this.begin = newNode
      this.begin.next = this.end

      return
    }

    const oldBegin = this.begin
    oldBegin.prev = newNode
    newNode.next = oldBegin
    this.begin = newNode
  }

  // This function should add new element with value x to the end of the list
  pushBack(x) {
    this.insertAfter(this.end, x)
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
    let size = 0

    let currentNode = this.begin

    while(currentNode) {
      size += 1
      currentNode = currentNode.next
    }

    return size
  }

  // This function should return an array with values the same as in list
  toArray() {
    if (!this.begin) return []
    
    const result = []
    let currentNode = this.begin

    while(currentNode) {
      result.push(currentNode.x)
      currentNode = currentNode.next
    }

    return result
  }

  // This function should remove the element x from the list
  remove(x) {
    if (x === this.begin) {
      const newBegin = this.begin.next
      this.begin = newBegin
      this.begin.prev = null

      return
    }

    if (x === this.end) {
      const newEnd = this.end.prev

      if (newEnd === this.begin) {
        this.end = null
        this.begin.next = null

        return
      }

      this.end = newEnd
      this.end.next = null

      return
    }

    const nextNode = x.next
    const prevNode = x.prev

    prevNode.next = nextNode
    nextNode.prev = prevNode
  }

  // This function should remove first element in the list and return its value
  popFront() {
    if (!this.begin) return null

    if (this.getSize() === 1) {
      const tmpNode = this.begin

      this.begin = null
      this.end = null

      return tmpNode.x
    }

    if (this.getSize() === 2) {
      const tmpNode = this.begin

      this.end.prev = null
      this.begin = this.end

      return tmpNode.x
    }

    const tmpBegin = this.begin
    const nextNode = this.begin.next

    nextNode.prev = null
    this.begin = nextNode

    return tmpBegin.x
  }

  // This function should remove last element in the list and return its value
  popBack() {
    if (!this.begin && !this.end) return null

    if (this.getSize() === 1) {
      const tmpNode = this.begin

      this.begin = null
      this.end = null

      return tmpNode.x
    }

    if (this.getSize() === 2) {
      const tmpNode = this.end

      this.begin.next = null
      this.end = this.begin

      return tmpNode.x
    }

    const prevNode = this.end.prev
    const tmpEnd = this.end
    prevNode.next = null
    this.end = prevNode

    return tmpEnd.x
  }

  // This function should insert element with the value val after the element x
  insertAfter(x, val) {
    const newNode = new Node(val)

    if (this.begin === x && this.getSize() === 1) {
      this.end = newNode
      this.end.prev = this.begin
      this.begin.next = this.end

      return
    }

    if (!this.begin) {
      this.begin = newNode
      this.end = newNode

      return
    }


    // Если вставляем в конец
    if (this.end === x) {
      const tmpEnd = this.end
      newNode.prev = tmpEnd
      tmpEnd.next = newNode
      this.end = newNode

      return
    }

    const nextNode = x.next

    x.next = newNode
    newNode.prev = x
    newNode.next = nextNode
    nextNode.prev = newNode
  }

  // This function should return element at index
  getAt(index) {
    let currentIndex = 0
    let currentNode = this.begin

    while (currentIndex !== index) {
      currentIndex += 1
      currentNode = currentNode.next
    }

    return currentNode
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
