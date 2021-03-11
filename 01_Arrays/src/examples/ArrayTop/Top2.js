function main() {
  const ages = [49, 31, 19, 66, 94, 27, 15];

  let top1Age = 0;
  let top2Age = 0;

  // Найдем первый максимум в массиве
  for (let i = 0; i < ages.length; ++i) {
    top1Age = Math.max(top1Age, ages[i]);
  }

  // Добавим второй проход по массиву
  // И рассмотрим только элементы, которые меньше первого максимума
  for (let i = 0; i < ages.length; ++i) {
    if (ages[i] < top1Age) {
      top2Age = Math.max(top2Age, ages[i]);
    }
  }

  console.log(`First Max: ${top1Age}\nSecond Max: ${top2Age}\n`);
}

main();