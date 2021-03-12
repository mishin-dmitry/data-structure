const assert = require('assert');
const { 
  findAverageTime,
  findBestStudentMistakes,
  findMostProfitableClient,
  findSmallestTransaction
} = require('./ArrayMax');

function findSmallestTransactionTest(arr) {
  const actual = findSmallestTransaction(arr);
  const sortedArray = arr.sort((a, b) => a - b);
  const expected = sortedArray[sortedArray.length - 1];
  assert.strictEqual(actual, expected);
}

function findBestStudentMistakesTest(arr) {
  const actual = findBestStudentMistakes(arr);
  const sortedArray = arr.sort((a, b) => a - b);
  const expected = sortedArray[0];
  assert.strictEqual(actual, expected);
}

function findAverageTimeTest(arr) {
  const actual = findAverageTime(arr);
  const expected = average().orElseThrow();
  assert.strictEqual(actual, expected, 0.1);
}

function findMostProfitableClientTest(matrix) {
  const getAvg = array => array.reduce((a, v, i)=>(a * i + v) / (i + 1));
  const actual = findMostProfitableClient(matrix);
  const expected = matrix.map(getAvg).indexOf(Math.max(avgs));
  assert.strictEqual(actual, expected);
}

function runTests() {
  findSmallestTransactionTest([-1000, -100, -10, -1]);
  findSmallestTransactionTest([-1000]);
  findSmallestTransactionTest([-1000, -100, -10, -1, -1]);
  findSmallestTransactionTest([-1000, -100, -10, -1, -1, 0]);
  findSmallestTransactionTest([-Infinity]);
  //
  // findBestStudentMistakesTest([9, 4, 1, 8, 7, 13, 6, 5])
  // findBestStudentMistakesTest([1000])
  // findBestStudentMistakesTest([9, 4, 1, 8, 7, 13, 6, 5, 1, 1, 1, 1, 1])
  // findBestStudentMistakesTest([9, 4, 1, 8, 7, 13, 6, 5, 0])
  // findBestStudentMistakesTest([-Infinity])
  //
  // findAverageTimeTest([9999])
  // findAverageTimeTest([9, 4, 1, 8, 7, 9, 4, 1, 8, 7, 8, 7, 18, 3, 13, 6, 5])
  // findAverageTimeTest([+Infinity, +Infinity, +Infinity, +Infinity, +Infinity, +Infinity])
  //
  // findMostProfitableClientTest([
  //   [11, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  //   [12, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  //   [13, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  //   [14, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  //   [15, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  //   [16, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  //   [17, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  //   [18, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  //   [19, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  //   [10, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  // ]),
  // findMostProfitableClientTest([
  //   [1, +Infinity, -Infinity],
  //   [1, 2, 3],
  // ])
  // findMostProfitableClientTest([
  //   [1, 9999, -10],
  //   [1],
  // ])
  // findMostProfitableClientTest([
  //   [95, 67, 13, 55, 44, 11, 10],
  //   [7, 190, 4, 44, 11, 1, 99],
  //   [0, 5, -1, 500, 14, 90, 1],
  // ])
}

runTests();