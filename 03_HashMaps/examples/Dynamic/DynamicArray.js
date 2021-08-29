class DynamicArray {
  constructor() {
    this.values = new Array(8);
    this.size = 8;
    this.currentIndex = 0;
  }

  add(value) {
    this.values[this.currentIndex] = value;
    this.currentIndex++;
    if (this.currentIndex == this.size) {
      resize(this.size * 2);
    }
  }

  resize(newSize) {
    newValues = new Array(newSize);
    for (let i = 0; i < this.size; i++) {
      newValues[i] = this.values[i];
    }
    this.values = newValues;
    this.size = newSize;
  }
}

function main() {
  const dynArr = new DynamicArray();
}

main();

module.exports = {
  DynamicArray
}