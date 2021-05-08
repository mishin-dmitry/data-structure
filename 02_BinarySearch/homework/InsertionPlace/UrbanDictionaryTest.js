const { insertNewWord, newRussianDictionary } = require('./UrbanDictionary.js');
const assert = require('assert');

function testInsertNewWord() {
    insertNewWord('Селфи');
    let expected = new Array('Контент', 'Лутер', 'Селфи', 'Тренд', 'Фиксер', 'Фэшн', 'Хипстер');
    assert.deepStrictEqual(newRussianDictionary, expected);

    insertNewWord('Эджайл');
    expected = new Array('Контент', 'Лутер', 'Селфи', 'Тренд', 'Фиксер', 'Фэшн', 'Хипстер', 'Эджайл');
    assert.deepStrictEqual(newRussianDictionary, expected);
}

function main() {
    testInsertNewWord();
    console.log('All tests for const passed successfully! Congrats');
}

main();