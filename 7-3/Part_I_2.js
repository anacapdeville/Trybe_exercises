const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

//Exercise 1
const removed = myRemove([1, 2, 3, 4], 3);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

//Exercise 2
assert.notDeepEqual(removed, [1, 2, 3, 4], 'these two arrays are not different');

//Exercise 3
assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'the array was modified')

//Exercise 4
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);