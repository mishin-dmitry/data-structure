const binarySearch = (array, target) => {
  let left = 0
  let right = array.length - 1
  let middle = Math.floor((right + left) / 2)

  while (left <= right) {
    if (array[middle] < target) {
      left = middle + 1
    } else if (array[middle] > target) {
      right = middle - 1
    } else {
      return middle
    }
  }

  return -1
}