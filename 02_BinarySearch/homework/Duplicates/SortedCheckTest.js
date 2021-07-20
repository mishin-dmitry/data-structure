const { mySortedCheck } = require('./SortedCheck.js');
const assert = require('assert');

function testSortedCheck() {
    let data = [1, 2, 3, 4, 5]
    assert.strictEqual(mySortedCheck(data), true);

    data = [10, 2, 3, 4, 5]
    assert.strictEqual(mySortedCheck(data), false);

    data = [1, 2, 8, 4, 5]
    assert.strictEqual(mySortedCheck(data), false);

    data = [-1, 0, 3, 4, 5]
    assert.strictEqual(mySortedCheck(data), true);

    data = [1, 200, 300, 0, 5]
    assert.strictEqual(mySortedCheck(data), false);
}

function main() {
  testSortedCheck();
    console.log('All tests for const passed successfully! Congrats');
}

main();