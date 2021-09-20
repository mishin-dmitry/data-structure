class KeyValuePair {
  constructor(key, value) {
    this.value = value;
    this.key = key;
  }
}

class HashMap {
  entries = new Array(8);
  size = 8;
  numberOfElements = 0;

  hashFunction(key) {
    //
    return 0;
  }

  add(key, value) {
    const index = this.findGoodIndex(key);
    this.entries[index] = new KeyValuePair(key, value);
    this.numberOfElements++;
    if (this.numberOfElements == this.size) {
      this.resize(this.size * 2);
    }
  }

  resize(newSize) {
    // Создать новый массив
    const newEntries = new Array(newSize);
    // Скопировать 8 элементов из старого массива

    for (i = 0; i < size; i++) {
      const entry = this.entries[i];
      const index = this.findGoodIndex(entry.key);
      newEntries[index] = entry;
    }
    this.entries = newEntries;
    this.size = newSize;
  }

  get(key) {
    const index = this.findGoodIndex(key);
    if (index == -1) {
      return null;
    }
    
    const entry = this.entries[index];
    if (entry == null) {
      return null;
    }
    return entry.value;
  }

  findGoodIndex(key) {
    const hash = this.hashFunction(key);
    const index = hash % this.size;

    for (let i = 0; i < this.size; i++) {
      const probingIndex = (index + i) % this.size;
      const entry = this.entries[probingIndex];

      if (entry == null || entry.key === key) {
        return probingIndex;
      }
    }
    return -1;
  }
}

function main() {
  const hashMap = new HashMap();
}

main();

module.exports = {
  HashMap
}