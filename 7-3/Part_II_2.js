const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (array) => {
  let arrayOfNumbersOfWords = [];
  for (index = 0; index < array.length; index += 1) {
    let numberOfWords = 0;
    for (index2 = 0; index2 < array[index].length; index2 += 1) {
      numberOfWords += 1;
    }
    arrayOfNumbersOfWords.push(numberOfWords);
  }
  return arrayOfNumbersOfWords;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);