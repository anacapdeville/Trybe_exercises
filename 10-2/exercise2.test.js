const getUserName = require('./exercise2');

test('the name is Mark', () => {
  expect.assertions(1);
  return expect(getUserName(4)).resolves.toBe('Mark');
});

test('the user was not found', () => {
  expect.assertions(1);
  return expect(getUserName(3)).rejects.toEqual({ error: 'User with 3 not found.' });
});