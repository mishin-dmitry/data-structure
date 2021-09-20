const { DynamicArray } = require('../../examples/Dynamic/DynamicArray');

class VeryDynamicArray extends DynamicArray {
  deleteElementAt(index) {
    if (this.entries[index]) {
      this.entries[index] = undefined
    }
  }
}

function main() {
  const veryDynArray = new VeryDynamicArray();
}

main();