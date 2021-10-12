
// Stack implemented using dynamic array inside
class Stack {
  constructor() {
    // Array where we store the data
    a = new Array(10);
    // Number of elements that we actually store in the array. <= a.length
    size = 0;
  }

  getSize() {
    return size;
  }

  // This function is called when it's not enough memory to fit new elements.
  // It creates new long array and copies all the elements there.
  reallocate() {
    /* IMPLEMENT THIS */
  }

  // Adds element to the end of the stack
  pushBack(x) {
    /* IMPLEMENT THIS */
  }

  // Removes last element from the stack and returns its value
  popBack() {
    /* IMPLEMENT THIS */
    return 0;
  }

  // Returns value of the last element in the stack
  top() {
    /* IMPLEMENT THIS */
    return 0;
  }

  // Calculates the result of reversed polish notation. https://en.wikipedia.org/wiki/Reverse_Polish_notation
  // This one is simplified. Every number and character are separated by exactly one space.
  // Only + - * should be supported.
  // Example: calcPolish("1 2 3 * -") should return -5 | because (1 - (2 * 3))
  static calcPolish(s) {
    /* IMPLEMENT THIS */
    return 0;
  }
}

module.exports = {
  Stack
}