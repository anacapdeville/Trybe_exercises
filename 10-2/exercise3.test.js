const getUserName = require('./exercise2');

test('the name is Mark', async () => {
  expect.assertions(1);
  await expect(getUserName(4)).resolves.toBe('Mark');
});

test('the user was not found', async () => {
  expect.assertions(1);
  await expect(getUserName(3)).rejects.toEqual({ error: 'User with 3 not found.' });
});