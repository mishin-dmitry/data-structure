const { HashMap } = require('../../examples/Dynamic/HashMap');

class DynamicHashMap extends HashMap {
    deleteKey(key) {
      const index = this.findGoodIndex(key)

      this.entries[index] = undefined;
    }

    getAllKeys() {
      const keys = [];

      for (let i = 0; i < this.size; i++) {
        if (this.entries[i]?.key != null) {
          keys.push(this.entries[i].key)
        }
      }

      return keys;
    }

    getAllValues() {
      const values = [];

      for (let i = 0; i < this.size; i++) {
        if (this.entries[i]?.key != null) {
          values.push(this.entries[i].value)
        }
      }

      return values;
    }
}

function main() {
  const dynHashMap = new DynamicHashMap();
}

main();