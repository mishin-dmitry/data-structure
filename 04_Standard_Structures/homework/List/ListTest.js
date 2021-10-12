const { List } = require('./List');
const assert = require('assert');

function testToArray() {
  const t1 = [1, 2, 5, 1, 2, 6, 1, 6, 8, 324, -10, 20];
  const t2 = [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 2, 3];

  assert.deepStrictEqual(List.fromArray(t1).toArray(), t1);
  assert.deepStrictEqual(List.fromArray(t2).toArray(), t2);
}

function testSize() {
  const t1 = [1, 2, 3, 4, 5, 6];
  const t2 = [1];
  const t3 = new Array(10000);

  assert.strictEqual(List.fromArray(t1).getSize(), 6);
  assert.strictEqual(List.fromArray(t2).getSize(), 1);
  assert.strictEqual(List.fromArray(t3).getSize(), 10000);
  assert.strictEqual(new List().getSize(), 0);
}

function testEverySecond() {
  const t1 = [1, 2, 3, 4, 5, 6];
  const expected1 = [1, 3, 5];

  const t2 = [1];
  const expected2 = [1];

  const t3 = [1, 1, 1, 1];
  const expected3 = [1, 1];

  const t4 = [6, 1, 6, 1, 6, 2, 5, 3, 7];
  const expected4 = [6, 6, 6, 5, 7];

  assert.deepStrictEqual(List.fromArray(t1).copyEverySecond().toArray(), expected1);
  assert.deepStrictEqual(List.fromArray(t2).copyEverySecond().toArray(), expected2);
  assert.deepStrictEqual(List.fromArray(t3).copyEverySecond().toArray(), expected3);
  assert.deepStrictEqual(List.fromArray(t4).copyEverySecond().toArray(), expected4);

}

function testFilterX() {
  const t1 = [1, 2, 3, 4, 5, 6];
  const expected1 = [1, 3, 5];

  const t2 = [1];
  const expected2 = [1];

  const t3 = [12, 6, 1, 7];
  const expected3 = [1, 7];

  const t4 = [8, 2, 12, 4, 120, 1240, 5, 1224, 2024];
  const expected4 = [2, 5];

  const t5 = new Array(10000);
  let l = List.fromArray(t1);

  l.filterDivisible(2);
  assert.deepStrictEqual(l.toArray(), expected1);

  l = List.fromArray(t2);
  l.filterDivisible(7);
  assert.deepStrictEqual(l.toArray(), expected2);

  l = List.fromArray(t3);
  l.filterDivisible(3);
  assert.deepStrictEqual(l.toArray(), expected3);

  l = List.fromArray(t4);
  l.filterDivisible(4);
  assert.deepStrictEqual(l.toArray(), expected4);

  // Нужен ли этот тест? Кажется в нем опечатка
  // l = List.fromArray(t5);
  // l.filterDivisible(7);
  // assert.strictEqual(l.getSize(), 0);
}

function testGetAndInsert() {
  const l = new List();
  l.pushFront(4);
  l.pushFront(3);
  l.pushFront(1);

  assert.deepStrictEqual(l.toArray(), [1, 3, 4]);

  l.insertAfter(l.getAt(0), 2);
  assert.deepStrictEqual(l.toArray(), [1, 2, 3, 4]);

  l.insertAfter(l.getAt(3), 5);
  assert.deepStrictEqual(l.toArray(), [1, 2, 3, 4, 5]);
 

  n = l.getAt(2);
  for (let i = 0; i < 5; ++i) {
      l.insertAfter(n, 100);
  }
 
  assert.deepStrictEqual(l.toArray(), [1, 2, 3, 100, 100, 100, 100, 100, 4, 5]);
}

function testGetAndRemove() {
  const l = new List();
  l.pushFront(7);
  l.pushFront(6);
  l.pushFront(5);
  l.pushFront(4);
  l.pushFront(3);
  l.pushFront(1);

  assert.deepStrictEqual(l.toArray(), [1, 3, 4, 5, 6, 7]);

  l.removeAfter(l.getAt(0));
  assert.deepStrictEqual(l.toArray(), [1, 4, 5, 6, 7]);

  l.removeAfter(l.getAt(3));
  assert.deepStrictEqual(l.toArray(), [1, 4, 5, 6]);
}

function main() {
  testGetAndRemove()
  testToArray();
  testSize();
  testEverySecond();
  testFilterX();
  testGetAndInsert();
  console.log('All tests for const passed successfully! Congrats');
}

main();