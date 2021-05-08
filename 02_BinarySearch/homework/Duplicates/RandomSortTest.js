const { randomSort } = require('./RandomSort.js');
const assert = require('assert');

function testRandomSortElements(count, testArray, expected) {
    console.log("<".repeat(20));
    console.log("Start sort array with " + count + " element");

    var hrstart = process.hrtime()
    randomSort(testArray);
    var hrfinish = process.hrtime(hrstart);


    assert.deepStrictEqual(testArray, expected);
    console.info('Execution time (hr): %ds %dms', hrfinish[0], hrfinish[1] / 1000000)
    console.log(">".repeat(20));
}

function testRandomSort() {
    testRandomSortElements(2, [2, 1], [1, 2]);
    testRandomSortElements(3, [2, 1, 3], [1, 2, 3]);
    testRandomSortElements(4, [2, 1, 4, 3], [1, 2, 3, 4]);
    testRandomSortElements(5, [2, 1, 5, 4, 3], [1, 2, 3, 4, 5]);
    testRandomSortElements(10, [2, 1, 5, 4, 3, 6, 9, 7, 10, 8], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
}

function main() {
    testRandomSort();
    console.log('All tests for const passed successfully! Congrats');
}

main();