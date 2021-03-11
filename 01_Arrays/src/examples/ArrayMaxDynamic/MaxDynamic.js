function main() {
  // Возьмем тот же массив что и в примере с сортировкой
  const ages = [49, 31, 19, 66, 94, 27, 15];
  let maxAge = 0;

  // И пройдем по нему циклом for
  for (let i = 0; i < ages.length; ++i) {
    // На каждом шаге будем обновлять текущий максимум
    maxAge = Math.max(maxAge, ages[i]);
  }

  // В итоге в maxAge будет абсолютный максимум
  console.log(`MaxAge = ${maxAge}\n`)
}

main();
