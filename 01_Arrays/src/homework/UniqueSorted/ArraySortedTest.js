const assert = require("assert");
const { groupAndPrint, cryptoCurrencyAnalysis } = require("./ArraySorted.js");

function runTests() {
  groupAndPrint([
    79000000000,
    79000000000,
    79000000001,
    79000000002,
    79000000002,
    79000000003,
    79000000003,
    79000000003,
    79000000003,
    79000000004,
  ]);

  cryptoCurrencyAnalysis([
    { name: "BTC", amount: 42 },
    { name: "BTC", amount: 600 },
    { name: "BTC", amount: 900 },
    { name: "DOGE", amount: 123456 },
    { name: "DOGE", amount: 69420 },
    { name: "ETH", amount: 220 },
    { name: "ETH", amount: 666 },
    { name: "XMR", amount: 14 },
    { name: "XMR", amount: 88 },
  ]);

  cryptoCurrencyAnalysis([
    { name: "BTC", amount: 600 },
    { name: "BTC", amount: 600 },
    { name: "BTC", amount: 600 },
    { name: "BTC", amount: 600 },
    { name: "BTC", amount: 600 },
    { name: "BTC", amount: 600 },
    { name: "BTC", amount: 600 },
  ]);

  cryptoCurrencyAnalysis([
    { name: "BTC", amount: 1 },
    { name: "DOGE", amount: 2 },
  ]);
}

runTests();
