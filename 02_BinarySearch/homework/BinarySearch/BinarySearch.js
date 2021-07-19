function doIKnowThisLanguage(languagesList, language) {
  let left = 0;
  let right = languagesList.length - 1;
  let middle = Math.floor((left + right) / 2)

  while (left <= right) {
    if (languagesList[middle] < language) {
      left = middle + 1
    } else if (languagesList[middle] > language) {
      right = middle - 1
    } else {
      return true
    }

    middle = Math.floor((left + right) / 2)
  }

  return false
}

class DatingUser {
  constructor(IQ, name) {
    this.IQ = IQ;
    this.name = name;
  }
}

const findValueBySimpleBinarySearch = (array, target) => {
  let left = 0
  let right = array.length - 1
  let middle = Math.floor((left + right) / 2)

  while (left <= right) {
    if (array[middle].IQ < target) {
      left = middle + 1
    } else if (array[middle].IQ > target) {
      right = middle -1
    } else {
      return array.slice(middle, middle + 1)
    }

    middle = Math.floor((left + right) / 2)
  }

  return []
}

function findUsers(usersSortedByIQ, lowerIQBound, professorIQ) {
  if (lowerIQBound === professorIQ) {
    return findValueBySimpleBinarySearch(usersSortedByIQ, lowerIQBound)
  }

  const targetDiff = professorIQ - lowerIQBound

  let left = 0
  let right = usersSortedByIQ.length - 1
  let middle = Math.floor((left + right) / 2)
  let currentDiff = usersSortedByIQ[right].IQ - usersSortedByIQ[left].IQ

  while (currentDiff > targetDiff && left < right) {
    if (usersSortedByIQ[middle].IQ > lowerIQBound) {
      left = middle
    }

    if (usersSortedByIQ[middle].IQ > professorIQ) {
      right = middle - 1
    }

    middle = Math.floor((left + right) / 2)
    currentDiff = usersSortedByIQ[right].IQ - usersSortedByIQ[left].IQ
  }

  return usersSortedByIQ.slice(left, right + 1);
}

const findValue = (array, target, isReverse) => {
  let left = 0
  let right = array.length - 1
  let middle = Math.floor((left + right) / 2)

  while (left <= right) {
    if (array[middle] < target) {
      if (isReverse) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    } else if (array[middle] > target) {
      if (isReverse) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    } else {
      return middle
    }

    middle = Math.floor((left + right) / 2)
  }

  return -1
}

function findPhoneNumber(sortedPhoneNumbers, search) {
  const head = sortedPhoneNumbers[0]
  const tail = sortedPhoneNumbers[sortedPhoneNumbers.length - 1]

  return findValue(sortedPhoneNumbers, search, head > tail)
}

module.exports = {
  doIKnowThisLanguage, DatingUser,
  findUsers, findPhoneNumber
}

