function removeDuplicates(array) {
  let length = array.length; // по умолчанию наш результат имеет исходную длину

  // Здесь мы будем использовать необычный цикл для обхода массива, ведь согласно нашему плану мы будем сами
  // решать когда нам пора двигаться дальше, а когда стоит рассмотреть текущий элемент еще раз.
  // Кстати, текущий элемент обозначим переменной
  let i = 0;

  // Мы будем идти циклом по нашему меняющемуся массиву до тех пор пока не достигнем его конца.
  while (i < length) {

    let found = false;
    for (let k = i + 1; k < length; k++) {
      if (array[k] == array[i]) {
        found = true;
        break;
      }
    }

    // Что ж, если дубликата мы не нашли, можем смело двигаться дальше
    if (!found) {
      i++;
      continue;
    }

    //А вот если мы его все же нашли, то пора заняться коррупционерствованием и украсть дублирующуюся
    //статью бюджета !

    else {
      // поочередно удаляем элементы, помните функцию которую мы рассматривали в начале урока?
      // Нам потребуется еще один точно такой же цикл начиная от следующего элемента и заканчивая концом массива
      for (let k = i + 1; k < length; k++) {
        array[k - 1] = array[k];
      }
      // длина нашего массива уменьшается на 1
      length--;
      // и еще не время двигаться дальше, потому что нам нужно снова рассмотреть новый i-ый элемент, так что i мы пока не меняем
      continue;
    }
  }
  return length;
}

function main() {
  const array = new Array(15, 23, 20, 5, 15, 20, 15, 20);
  console.log('Original: ' + array.join(','));
  const r = removeDuplicates(array);
  console.log('Unique: [');
  for (let i = 0; i < r; i++) {
    console.log(` ${array[i]}, `);
  }
  console.log(']\n');
}

main();