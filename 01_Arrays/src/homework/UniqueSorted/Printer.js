function printPhoneInfo(phone, count) {
  console.log(`+${phone} — поступило заявок: ${count}`);
}

function printCurrencyInfo(name, amount) {
  console.log(`${name}: ${amount.toFixed(3)}`);
}

module.exports = {
  printCurrencyInfo,
  printPhoneInfo,
};
