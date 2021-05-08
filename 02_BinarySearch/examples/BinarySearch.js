
function binarySearch(array, search) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      if (array[middle] < search) {
          left = middle + 1;
      } else if (array[middle] > search) {
          right = middle - 1;
      } else {
          return middle;
      }
  }
  return -1;
}