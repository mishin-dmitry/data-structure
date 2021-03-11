function findMaxUnderBoundary(inputArray, topBoundary) {
  // Найдем текущий максимум
  let currentMax = +Infinity;
  for (let k = 0; k < inputArray.length; k++) {
    // Рассмотрим только те элементы, которые меньше заданного числа
    if (inputArray[k] < topBoundary) {
      currentMax = Math.max(currentMax, inputArray[k]);
    }
  }
  return currentMax;
}

function findTopElements(inputArray, numberOfElements) {
  const topElements = new Array(numberOfElements);

  // Нам требуется знать предыдущее значение максимума,
  // По-умолчанию мы положим туда максимальное значение для типа int
  let previousMax = +Infinity;

  // Выполним цикл столько раз, сколько максимумов нам нужно найти
  for (let i = 0; i < numberOfElements; i++) {
    // Найдем текущий максимум
    const currentMax = findMaxUnderBoundary(inputArray, previousMax);

    // Обновим значение "предыдущего" максимума
    previousMax = currentMax;

    // Положим результат в выходной массив
    topElements[i] = currentMax;
  }
  return topElements;
}

function findBottomElements(inputArray, numberOfElements) {
  return [0, 0, 0]; // Please implement
}

function main() {
  const array = [10, 66, 4, 16, 99, 35, 11, 123];

  const top5 = findTopElements(array, 5);
  console.log(`Top 5: ${top5.join(",")}`);

  const top8 = findTopElements(array, 8);
  console.log(`Top 8: ${top8.join(",")}`);
}

module.exports = {
  findBottomElements,
  findTopElements,
  findMaxUnderBoundary,
};
