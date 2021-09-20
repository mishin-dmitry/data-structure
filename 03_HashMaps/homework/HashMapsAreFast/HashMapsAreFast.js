class HashMap {
  constructor() {
    this.values = new Array(8)
    this.count = 0
    this.size = 8
  }

  add(value) {
    const index = this.findGoodIndex(value)

    this.values[index] = value

    if (this.size === this.count) {
      this.resize(this.count * 2)
    }
  }

  resize(newSize) {
    const newValues = new Array(newSize);

    for (let i = 0; i < this.count; i++) {
      const index = this.values[i] % newSize
      newValues[index] = this.values[i]
    }

    this.values = newValues
    this.size = newSize
  }

  hasValue(value) {
    const index = value % this.size
    const existValue = this.values[index]

    return existValue && existValue === value
  }

  getValues() {
    return this.values.filter(i => !!i);
  }

  findGoodIndex(searchValue) {
    const index = searchValue % this.size

    for (let i = 0; i < this.size; i++) {
      const tmpIndex = (index + i) % this.size;
      const existValue = this.values[tmpIndex]

      if (!existValue || existValue === searchValue) {
        if (!existValue) {
          this.count++
        }

        return tmpIndex;
      }
    }
  }
}

function getUniqueNumbers(inputArray) {
  const hashMap = new HashMap();

  for (let i = 0; i < inputArray.length; i++) {
    hashMap.add(inputArray[i])
  }

  return hashMap.getValues()
}

function isThereTwoNumbers(numbers, X) {
  const hashMap = new HashMap();

  for (let i = 0; i < numbers.length; i++) {
    const difference = X - numbers[i]

    if (hashMap.hasValue(numbers[i])) {
      return true
    }

    hashMap.add(difference)
  }

  return false;
}