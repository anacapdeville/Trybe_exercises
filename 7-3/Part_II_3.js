const assert = require('assert');
// escreva a função addAllnumbers aqui
const addAllnumbers = (array) => {
  let sumOfAllNumbers = 0;
  for (index = 0; index.length < array.length; index += 1) {
    sumOfAllNumbers += array[index];
  }
  return sumOfAllNumbers;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);