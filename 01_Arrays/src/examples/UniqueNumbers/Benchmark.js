const { performance } = require('perf_hooks');
const { findUnique } = require('./Example'); 

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function generateRandom(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
      arr[i] = getRandomInt(0, 100_000);
  }
  return arr;
}

function benchmark() {
  let totalUnique = 0;

  // Make it like 30-50 for faster results,
  // 100 iterations may take ~5-10 minutes
  const totalIterations = 100;
  const sizes = new Array(totalIterations);
  const durations = new Array(totalIterations);
  let size = 100;

  console.log(`Running ${totalIterations} iterations,\nHang on, this will take a while...\n`);
  for (let i = 0; i < totalIterations; ++i) {

      const testArray = generateRandom(size);
      const start = performance.now();
      const unique = findUnique(testArray);
      const duration = performance.now() - start;

      sizes[i] = size;
      durations[i] = duration;
      totalUnique += unique.length;
      size += 1000;

      console.log(`(${i}/${totalIterations}) findUnique([${size} elements]) took ${duration} milliseconds\n`);
  }

  console.log(`Total unique numbers = ${totalUnique}\n`);
}

benchmark();
