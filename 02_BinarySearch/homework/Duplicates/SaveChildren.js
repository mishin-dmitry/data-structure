function permutateWords(words) {
  for (let i=0; i < words.length; i++) {
    makeWordUnique(words[i], words, i)
  }

  return words;
}

function makeWordUnique(currentWord, words, currentIndex) {
  for (let i=0; i < words.length; i++) {
    if (i === currentIndex) {
      continue
    }

    const currentIterWord = words[i];
    let isWordUnique = false

    for (let k=0; k < currentWord.length; k++) {
      const currentChar = currentWord[k]
      const currentIterWordChar = currentIterWord[k]

      if (currentChar !== currentIterWordChar) {
        isWordUnique = true
        break
      }
    }

    if (!isWordUnique) {
      shiftChars(currentWord)

      return makeWordUnique(currentWord, words, currentIndex)
    }
  }
}

function shiftChars(array) {
  const head = array[0]

  for (let i=1; i < array.length; i++) {
    array[i - 1] = array[i]
  }

  array[array.length - 1] = head
}


module.exports = { permutateWords }