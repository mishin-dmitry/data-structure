/*
  Запустите Benchmark чтобы посмотреть сколько времени занимает выполнение этого кода
*/
function findUnique(phoneNumbers) {
  // Заведем список уникальных номеров, "Блокнотик"
  const uniqueNumbers = [];

  // Пройдемся циклом по нашим номерам
  for (let currentNumber of phoneNumbers) {

      // Проверим есть ли уже этот номер в "Блокнотике"
      let alreadyExists = false;
      for (let existingNumber of uniqueNumbers) {
          if (currentNumber === existingNumber) {
              alreadyExists = true;
              break;
          }
      }

      // Если его там нет — то добавим
      if (!alreadyExists) {
        uniqueNumbers.push(currentNumber);
      }
  }
  return uniqueNumbers;
}

function main() {
  const phoneNumbers = [+79161002030, +79255558877, +79219990000, +79161002030];
  const uniqueNumbers = findUnique(phoneNumbers);
  console.log(`Unique numbers: ${uniqueNumbers.join(',')}`);
}

main();

module.exports = {
  findUnique
}

/*
    ————————————————————————
    —— Подумать на досуге ——
    ————————————————————————

    Этот пример можно решить многими способами,
    здесь мы намеренно рассматриваем самый явный и примитивный подход,
    чтобы разобраться во времени выполнения этого кода.

    Как бы вы переписали этот кода с использованием всех ваших знаний?
    Как бы изменилось время выполнения этого кода?

*/