const { mySortedCheck } = require('./SortedCheck');

function getRandom(max) {
  return Math.floor(Math.random() * max)
}

function randomSort(array) {
  while (!mySortedCheck(array)) {
    const firstInd = getRandom(array.length)
    let secondInd = getRandom(array.length - 1)

    while(secondInd === firstInd) {
      secondInd = getRandom(array.length)
    }

    [array[firstInd], array[secondInd]] = [array[secondInd], array[firstInd]]
  }
}

function myIsSorted(array) {
  // просто сотрите строку ниже и напишите свою реализацию
  return mySortedCheck(array);
}

module.exports = { randomSort, myIsSorted }