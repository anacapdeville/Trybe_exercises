const { TestScheduler } = require("jest");

const uppercase = require('./exercise1');

test('the words of the string are in uppercase', (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});