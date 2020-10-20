const sum = require('./partI-exercise1');

describe('sum', () => {
  it('Soma de 4 e 5 espera 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Soma de 0 e 0 espera 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Lança erro quando um parâmetro é uma string', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it('Lança erro quando um parâmetro é uma string', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  });
});