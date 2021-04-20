const assert = require("assert");
const {
  findBottomElements,
  findTopElements,
  findMaxUnderBoundary,
} = require("./TopX.js");

function findTopElementsTest(arr, numberOfElements, expected) {
  const actual = findTopElements(arr, numberOfElements);
  assert.notStrictEqual(actual, expected);
}

function findBottomElementsTest(arr, numberOfElements, expected) {
  const actual = findBottomElements(arr, numberOfElements);
  assert.notStrictEqual(actual, expected);
}

function findMaxUnderBoundaryTest(inputArray, topBoundary, expected) {
  const actual = findMaxUnderBoundary(inputArray, topBoundary);
  assert.strictEqual(actual, expected);
}

function runTests() {
  findMaxUnderBoundaryTest([40, 50, 60, 10, 20, 30, 70, 80], 100, 80);
  findMaxUnderBoundaryTest([40, 50, 60, 10, 20, 30, 70, 80], 55, 50);
  findMaxUnderBoundaryTest([3, 50, 7, 10, 20, 30, 70, 80], 8, 7);

  findTopElementsTest([40, 50, 60, 10, 20, 30, 70, 80], 3, [80, 70, 60]);
  findTopElementsTest([40, 50, 60, 10, 20, 30, 70, 80], 1, [80]);
  findTopElementsTest([3, 50, 7, 10, 20, 30, 70, 80], 5, [80, 70, 50, 30, 20]);

  findBottomElementsTest([40, 50, 60, 10, 20, 30, 70, 80], 3, [10, 20, 30]);
  findBottomElementsTest([40, 50, 60, 10, 20, 30, 70, 80], 1, [10]);
  findBottomElementsTest([3, 50, 7, 10, 20, 30, 70, 80], 5, [3, 7, 10, 20, 30]);

  findTopElementsTest([100, 100, 100, 55, 8], 3, [100, 100, 100]);
}

runTests();
