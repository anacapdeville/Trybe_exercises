const getRepos = require('./exercise4');

test('the repo contains sd-01-week4-5-project-todo-list', () => {
  expect.assertions(2);
  return getRepos('https://api.github.com/users/tryber/repos').then((array) => {
    expect(array).not.toContain('sd-01-week4-5-project-todo-list');
    expect(array).not.toContain('sd-01-week4-5-project-meme-generator')
  });
});