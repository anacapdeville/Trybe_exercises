const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

// Exercise 1
assert.equal(myFizzBuzz(15), 'fizzbuzz', 'the return is not what was expected');

// Exercise 2
assert.equal(myFizzBuzz(9), 'fizz', 'the return is not what was expected');

// Exercise 3
assert.equal(myFizzBuzz(10), 'buzz', 'the return is not what was expected');

// Exercise 4
assert.equal(myFizzBuzz(14), 14, 'the return is not what was expected');

// Exercise 5
assert.equal(myFizzBuzz('ola'), false, 'the return is not what was expected');

