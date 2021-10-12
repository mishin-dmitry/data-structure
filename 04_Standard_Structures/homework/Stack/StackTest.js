const { Stack } = require('./Stack');
const assert = require('assert');

function testPolish() {
  const stack = new Stack()
  assert(stack.calcPolish('8 9 + 1 7 - *') == -102);
  assert(stack.calcPolish('9 9 9 9 9 9 9 9 9 * * * * * * * *') == 387420489);
  assert(stack.calcPolish('2 3 4 5 * 6 - 7 + 8 9 2 * 3 4 1 - 3 4 + * 5 - + * + - * +') == -985);
  assert(stack.calcPolish('1 2 - 1 2 3 4 5 6 7 8 9 * * * * * * * * * 9 8 7 6 * * * *') == -1097349120);
  assert(stack.calcPolish('1234') == 1234);
  assert(stack.calcPolish('-1234') == -1234);
  assert(stack.calcPolish('1234 1 1 + +') == 1236);
  
  let b = new String();
  for (let i = 0; i < 10000; ++i) {
    b += `${i} `;
  }
  for (let i = 0; i < 10000; ++i) {
    b += '+';
    if (i != 9999) {
      b += ' ';
    }
  }
  assert(stack.calcPolish(b.toString()) == (10000 * 9999) / 2);
  b = new String();
  b += '0 ';
  for (let i = 0; i < 20000; ++i) {
    b += `${i} +`;
    if (i != 19999) {
      b += ' ';
    }
  }
  assert(stack.calcPolish(b.toString()) == (20000 * 19999) / 2);
}

function main() {
  testPolish();
  console.log('All tests for List passed successfully! Congrats');
}

main();

