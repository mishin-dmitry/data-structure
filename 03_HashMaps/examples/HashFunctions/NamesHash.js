function getIndexByKey(key) {
  return key.length;
}

function getValueByKey(values, key) {
  const index = getIndexByKey(key);
  return values[index];
}


function main() {
  const values = new Array(8);

  values[2] = 14; // Ия
  values[3] = 99; // Аня
  values[4] = 30; // Миша
  values[5] = 42; // Антон
  values[6] = 87; // Владик
  values[7] = 71; // Николай
}

main();