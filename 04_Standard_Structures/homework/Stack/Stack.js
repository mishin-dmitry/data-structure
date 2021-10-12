const { threadId } = require("worker_threads");

const OPERATIONS = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y
}

// Stack implemented using dynamic array inside
class Stack {
  constructor() {
    // Array where we store the data
    this.a = new Array(10);
    // Number of elements that we actually store in the array. <= a.length
    this.size = 0;
  }

    // Calculates the result of reversed polish notation. https://en.wikipedia.org/wiki/Reverse_Polish_notation
  // This one is simplified. Every number and character are separated by exactly one space.
  // Only + - * should be supported.
  // Example: calcPolish("1 2 3 * -") should return -5 | because (1 - (2 * 3))
  calcPolish(s) {
    const sequence = s.split(' ')

    for (let i = 0; i < sequence.length; i++) {
      const currentChar = sequence[i]

      if (currentChar in OPERATIONS) {
        const b = this.popBack() ?? 0
        const a = this.popBack() ?? 0
        const result = OPERATIONS[currentChar](a, b)
        this.pushBack(result)
      } else {
        this.pushBack(+currentChar)
      }
    }

    return this.popBack();
  }

  getSize() {
    return this.size;
  }

  // This function is called when it's not enough memory to fit new elements.
  // It creates new long array and copies all the elements there.
  reallocate() {
    const newA = new Array(this.size * 2)

    for (let i = 0; i < this.size; i++) {
      newA[i] = this.a[i]
    }

    this.a = newA
  }

  // Adds element to the end of the stack
  pushBack(x) {
    this.a[this.size] = x
    this.size += 1

    if (this.size === this.a.length) {
      this.reallocate()
    }
  }

  // Removes last element from the stack and returns its value
  popBack() {
    if (this.size * 4 === this.a.length) {
      const newA = new Array(Math.ceil(this.size / 2))

      for (let i = 0; i < this.size; i++) {
        newA[i] = this.a[i]
      }

      this.a = newA
    }

    // this.size -= 1
    this.size -= (this.size - 1 < 0 ? 0 :  1)

    const last = this.a[this.size]

    this.a[this.size] = undefined

    return last
  }

  // Returns value of the last element in the stack
  top() {
    return this.a[this.size - 1];
  }
}

module.exports = {
  Stack
}