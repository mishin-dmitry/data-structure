const { performance } = require('perf_hooks');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function benchmark() {
  const count = 10_000_000; // новая возможность es6 для записи числа
  const arr = [];

  for (let i = 0; i < count; ++i) {
    arr.push(getRandomInt(0, 10000));
  }
  
  const startTime = performance.now();
  const sortedArr = arr.sort((a, b) => a - b);
  const duration = performance.now() - startTime;

  console.log(`It took ${(duration / 1000).toFixed(2)} seconds to sort ${count} elements\n`);
  console.log(`Sorted: [${sortedArr[0]}, ${sortedArr[1]}, ..., ${sortedArr[sortedArr.length - 2]}, ${sortedArr[sortedArr.length - 1]}]`);
}

benchmark();