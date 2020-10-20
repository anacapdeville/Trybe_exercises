const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

// Exercise 1
const expected = sum(4, 5);
assert.equal(expected, 9, 'The sum of 4 and 5 is wrong');

// Exercise 2
const expected2 = sum(0, 0);
assert.equal(expected2, 0, 'The sum of 0 and 0 is wrong');

// Exercise 3
assert.throws(() => {sum(4, '5');})

// Exercise 4
assert.throws(() => {sum(4, '5');}, /parameters must be numbers/);