const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

// Exercise 1
assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 4), [1, 2, 3], 'the arrays are not identical');

// Exercise 2
assert.notDeepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], 'the arrays are equal');

// Exercise 3
assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'the array was not altered');

// Exercise 4
assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], 'the function returns the expected array');