const assert = require("assert");
const {
  lettersLearnedToday,
  avoidJailDueToTaxFraud,
} = require("./ArrayUnique.js");

function lettersLearnedTodayTest(word, expected) {
  const actual = lettersLearnedToday(word);
  assert.strictEqual(actual, expected);
}

function avoidJailDueToTaxFraudTest(report, expected) {
  const actual = avoidJailDueToTaxFraud(report);
  assert.strictEqual(actual, expected);
}

function runTests() {
  lettersLearnedTodayTest(
    "АААФФФФФФФЖЫЫЫЫБЫРВАААААЛГГГХЫХЫБЛИА",
    "АФЖЫБРВЛГХИ"
  );

  lettersLearnedTodayTest("АБВГДДГВБА", "АБВГД");

  lettersLearnedTodayTest("sunday", "sunday");

  avoidJailDueToTaxFraudTest(
    [
      [12_391_203, 3_828_382, 334_934_939],
      [45_345_345, 5_341_312, 55_345_345],
      [334_934_939, 1_234_122, 657_657],
    ],
    334_934_939
  );

  avoidJailDueToTaxFraudTest([[12_391_203, 3_828_382, 5_678]], -1);
}

runTests();
