const { permutateWords } = require('./SaveChildren.js');
const assert = require('assert');

function testPermutateWords() {

    const words = [
        ['ш', 'б', 'а', 'к', 'а'],
        ['к', 'а', 'т', 'e', 'н', 'к'],
        ['г', 'у', 'с', 'ъ', 'к'],
        ['ш', 'б', 'а', 'к', 'а'],
    ];

    const wordsExpected = [
        ['б', 'а', 'к', 'а', 'ш'],
        ['к', 'а', 'т', 'e', 'н', 'к'],
        ['г', 'у', 'с', 'ъ', 'к'],
        ['ш', 'б', 'а', 'к', 'а'],
    ];

    assert.deepStrictEqual(permutateWords(words), wordsExpected);

   const digits = [
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4']
    ];

    const digitsExpected = [
        ['2', '3', '4', '1'],
        ['3', '4', '1', '2'],
        ['1', '2', '3', '4']
    ];

    assert.deepStrictEqual(permutateWords(digits), digitsExpected);
}

function main() {
    testPermutateWords();
    console.log('All tests for const passed successfully! Congrats');
}

main();