const myFizzBuzz = require('./partI-exercise4');

describe('myFizzBuzz', () => {
  it('Deve retornar fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Deve retornar fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Deve retornar buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Deve retornar o próprio número', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('Deve retornar false', () => {
    expect(myFizzBuzz('a')).toBe(false);
  });
});

