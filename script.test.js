const { sum, subtract, multiply, divide } = require('./script');

test('sumamos 1 + 2 que sera 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('restamos 5 - 2 que sera 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiplicas 2 * 3 que sera 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divides 6 / 2 que sera 3', () => {
  expect(divide(6, 2)).toBe(3);
});

test('dividir entre cero da erros', () => {
  expect(() => {
    divide(1, 0);
  }).toThrow('No se puede dividir entre 0');
});

