
const newRussianDictionary = new Array('Контент', 'Лутер', 'Тренд', 'Фиксер', 'Фэшн', 'Хипстер');

// Как и в любом словаре, у вас слова идут строго порядку.
// Напишите функцию которая будет вставлять в словарь новые слова,

const findSpot = (word) => {
  let left = 0;
  let right = newRussianDictionary.length - 1

  while (left < right) {
    const middle = Math.floor((left + right) / 2)

    if (newRussianDictionary[middle] < word) {
      left = middle + 1
    } else {
      right = middle
    }
  }

  return newRussianDictionary[left] < word ? left + 1 : left
}

const insertWord = (index, word) => {
  for (let i = newRussianDictionary.length; i >= index; i--) {
    if (i === index) {
      newRussianDictionary[index] = word
      break
    }

    newRussianDictionary[i] = newRussianDictionary[i - 1]
  }
}

function insertNewWord(word) {
  const spot = findSpot(word)

  insertWord(spot, word)
}

module.exports = { insertNewWord, newRussianDictionary }
