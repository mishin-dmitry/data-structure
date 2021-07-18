const binarySearch = require('./BinarySearch.js');
const assert = require('assert');

function testDoIKnowThisLanguage() {
    let languages = ["ADA", "ALGOL", "B", "BASIC", "C", "JAVA", "JS", "PHP", "PYTHON"];

    assert.strictEqual(binarySearch.doIKnowThisLanguage(languages, "JS"), true, "Строка JS не найдена");
    assert.strictEqual(binarySearch.doIKnowThisLanguage(languages, "ADA"), true, "Строка ADA не найдена");
    assert.strictEqual(binarySearch.doIKnowThisLanguage(languages, "COBOL"), false, "Строка COBOL найдена");
}

function testFindUsers() {
    let sortedUsersByIq = [cDu(50, "A"), cDu(100, "B"), cDu(120, "C"), cDu(130, "D"), cDu(140, "E") ];

    let actual = binarySearch.findUsers(sortedUsersByIq, 110, 140);
    assert.deepStrictEqual(actual, [cDu(120, "C"), cDu(130, "D"), cDu(140, "E")]);

    actual = binarySearch.findUsers(sortedUsersByIq, 140, 140);
    assert.deepStrictEqual(actual, [cDu(140, "E")]);

    actual = binarySearch.findUsers(sortedUsersByIq, 110, 115);
    assert.deepStrictEqual(actual, []);
   
}

//create DatingUser
function cDu(iq, name){
    return new binarySearch.DatingUser(iq, name);
}

function testFindPhoneNumber() {
    let straightSortedPhones = ["79991111111", "79991111112", "79991111113", "79991111114" ];
    let reverseSortedPhones = ["79991111114", "79991111113", "79991111112", "79991111111" ];

    assert.strictEqual(binarySearch.findPhoneNumber(straightSortedPhones, "79991111111"), 0);
    assert.strictEqual(binarySearch.findPhoneNumber(straightSortedPhones, "79991111113"), 2);
    assert.strictEqual(binarySearch.findPhoneNumber(straightSortedPhones, "79991234567"), -1);

    assert.strictEqual(binarySearch.findPhoneNumber(reverseSortedPhones, "79991111111"), 3);
    assert.strictEqual(binarySearch.findPhoneNumber(reverseSortedPhones, "79991111113"), 1);
    assert.strictEqual(binarySearch.findPhoneNumber(reverseSortedPhones, "79991234567"), -1);
}



function main() {
    testDoIKnowThisLanguage();
    testFindUsers();
    // testFindPhoneNumber();
    console.log('All tests for const passed successfully! Congrats');
  }
  
  main();
  