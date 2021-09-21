const { DynamicArray } = require('../../examples/Dynamic/DynamicArray');

class VeryDynamicArray extends DynamicArray {
  deleteElementAt(index) {
    if (this.entries[index]) {
      this.entries[index] = undefined
      this.numberOfElements--;

      if (this.numberOfElements === (this.size / 4)) {
        this.resize(this.size / 4)
      }
    }
  }
}

function main() {
  const veryDynArray = new VeryDynamicArray();
}

main();