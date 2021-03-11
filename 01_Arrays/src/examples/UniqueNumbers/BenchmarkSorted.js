const { performance } = require('perf_hooks');
const { findUniqueSorted } = require('./ExampleSorted'); 

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function generateRandomSorted(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
      arr[i] = getRandomInt(0, 100_000);
  }
  return arr.sort((a, b) => a - b);
}

function main() {
  let totalUnique = 0;

  // Make it like 300-500 for faster results,
  // 1000 iterations may take ~5-10 minutes
  const totalIterations = 1000;
  const sizes = new Array(totalIterations);
  const durations = new Array(totalIterations);
  let size = 1000;

  console.log(`Running ${totalIterations} iterations,\nHang on, this will take a while...\n`);
  for (let i = 0; i < totalIterations; i++) {

      const testArray = generateRandomSorted(size);
      const start = performance.now();
      const unique = findUniqueSorted(testArray);
      const duration = performance.now() - start;

      sizes[i] = size;
      durations[i] = duration;
      totalUnique += unique.length;
      size += 5000;

      console.log(`(${i}/${totalIterations}) findUniqueSorted([${size} elements]) took ${duration} milliseconds\n`);
  }

  console.log(`Total unique numbers = ${totalUnique}\n`);
}

main();