const { TextEditor } = require('./TextEditor.js');
const assert = require('assert');

function testTextEditor() {
    let editor = new TextEditor();

    assert.strictEqual(editor.textLength, 0);

    editor.insertCharacterAt(0, 'П');
    editor.insertCharacterAt(1, 'р');
    editor.insertCharacterAt(2, 'и');
    editor.insertCharacterAt(3, 'ф');
    editor.insertCharacterAt(4, 'е');
    editor.insertCharacterAt(5, 'т');

    let expected = ['П', 'р', 'и', 'ф', 'е', 'т'];
    let actual = editor.text.slice().splice(0, 6);

    assert.strictEqual(editor.textLength, 6);
    assert.deepStrictEqual(actual, expected);

    editor.backspace(4);
    expected = ['П', 'р', 'и', 'е', 'т'];
    actual = editor.text.slice().splice(0, 5);

    assert.strictEqual(editor.textLength, 5);
    assert.deepStrictEqual(actual, expected);

    editor.insertCharacterAt(3, 'в');
    expected = ['П', 'р', 'и', 'в', 'е', 'т'];
    actual = editor.text.slice().splice(0, 6);

    assert.strictEqual(editor.textLength, 6);
    assert.deepStrictEqual(actual, expected);
}

function main() {
    testTextEditor()
    console.log('All tests for const passed successfully! Congrats');
}

main();