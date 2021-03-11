const { printPhoneInfo, printCurrencyInfo } = require("./Printer");

function groupAndPrint(phoneNumbers) {
  // Please implement
  // Use printPhoneInfo() method
  // E.g. printPhoneInfo(+79000000000L, 22);
}

function cryptoCurrencyAnalysis(fileContents) {
  console.log(`\n\tInput file contents:`);

  fileContents.forEach((element) => {
    printCurrencyInfo(element.name, element.amount);
  });

  // Please implement
  // Use printCurrencyInfo() method
  // E.g. printCurrencyInfo("BTC", 666.0);
}

module.exports = {
  groupAndPrint,
  cryptoCurrencyAnalysis,
};
