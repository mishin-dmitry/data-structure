const { DLList } = require('./DLList');
const assert = require('assert');

function arraysEqual(a1, a2) {
  return JSON.stringify(a1) === JSON.stringify(a2);
}

function testToArray() {
  const t1 = [1, 2, 5, 1, 2, 6, 1, 6, 8, 324, -10, 20];
  const t2 = [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 2, 3];
  assert(arraysEqual(t1, DLList.fromArray(t1).toArray()));
  assert(arraysEqual(t2, DLList.fromArray(t2).toArray()));
  assert(!arraysEqual(t2, DLList.fromArray(t1).toArray()));
}

function testSize() {
  const t1 = [1, 2, 3, 4, 5, 6];
  const t2 = [1];
  const t3 = new Array(10000);
  assert(DLList.fromArray(t1).getSize() == 6);
  assert(DLList.fromArray(t2).getSize() == 1);
  assert(DLList.fromArray(t3).getSize() == 10000);
  assert(new DLList().getSize() == 0);
}

function testPushAndPop() {
  const l = new DLList();
  l.pushFront(1);
  l.pushFront(2);
  l.pushFront(3);
  l.pushBack(4);
  l.pushBack(5);
  l.pushBack(6);
  assert(arraysEqual(l.toArray(), [3, 2, 1, 4, 5, 6]));
  assert(6 == l.popBack());
  assert(5 == l.popBack());
  assert(3 == l.popFront());
  assert(arraysEqual(l.toArray(), [2, 1, 4]));
}

function removeAndInsertAfter() {
  const l = new DLList();
  for (let i = 0; i < 10; ++i) {
    l.pushBack(1);
  }
  for (let i = 9; i >= 0; --i) {
    l.insertAfter(l.getAt(i), i);
  }
  assert(arraysEqual(l.toArray(), [1, 0, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 1, 9]));
  for (let i = 9; i >= 0; --i) {
    l.remove(l.getAt(2 * i));
  }
  assert(arraysEqual(l.toArray(), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  assert(l.getSize() == 10);
  for (let i = 0; i < 10; ++i) {
    l.popBack();
  }
  assert(l.getSize() == 0);
  for (let i = 0; i < 7; ++i) {
    l.pushFront(1);
    l.pushBack(2);
  }
  assert(l.getSize() == 14);
  for (let i = 0; i < 14; ++i) {
    l.popFront();
  }
  assert(l.getSize() == 0);
  l.pushFront(1);
  assert(l.end.x == 1);
  l.popBack();
  l.pushBack(2);
  assert(l.begin.x == 2);
  l.popFront();
  l.pushBack(7);
  assert(l.end.x == 7);
}

function main() {
  testToArray();
  testSize();
  testPushAndPop();
  removeAndInsertAfter();
  console.log('All tests for DLList passed successfully! Congrats');
}

main();