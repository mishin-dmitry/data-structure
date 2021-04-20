const { printPhoneInfo, printCurrencyInfo } = require("./Printer");

function groupAndPrint(phoneNumbers) {
  const numberCount = phoneNumbers.reduce((acc, cur) =>  {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  const entries = Object.entries(numberCount);
  entries.forEach(([number, count]) => {
    printPhoneInfo(number, count);
  });
}

function cryptoCurrencyAnalysis(fileContents) {
  console.log(`\n\tInput file contents:`);

  fileContents.forEach((element) => {
    printCurrencyInfo(element.name, element.amount);
  });

  const dataByCurrency = fileContents.reduce((acc, { name, amount }) => {
    acc[name] = (acc[name] ?? 0) + amount;
    return acc;
  }, {});

  const currencyEntries = Object.entries(dataByCurrency);
  currencyEntries.forEach(([name, amount]) => {
    printCurrencyInfo(name, amount);
  });
}

module.exports = {
  groupAndPrint,
  cryptoCurrencyAnalysis,
};
