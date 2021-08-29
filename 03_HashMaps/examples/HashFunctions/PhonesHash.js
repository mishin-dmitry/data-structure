
function getIndexByKey(key) {
    return key % 40;
}

function getValueByKey(values, key) {
  const index = getIndexByKey(key);
  return values[index];
}

function main() {
  const values = new Array(40);
  /*
      79101002030: 900,
      79101234567: 100,
      79999999999: 999,
      74952223344: 1
      … всего 40 номеров ...
  */

  values[30] = 900; // Ведь 79101002030 % 40 == 30, проверьте если не верите =)
  values[7] = 100; // Ведь 79101234567 % 40 == 7
  values[39] = 999; // Ведь 79999999999 % 40 == 39
  values[24] = 1; // Ведь 74952223344  % 40 == 1
  /* ... */
}

main();