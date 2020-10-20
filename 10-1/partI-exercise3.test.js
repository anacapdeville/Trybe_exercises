const myRemoveWithoutCopy = require('./partI-exercise3');

describe('myRemoveWithoutCopy', () => {
  it('Deve retornar [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Não deve retornar [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('O array não sofre alterações', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

  it('Deve retornar [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});