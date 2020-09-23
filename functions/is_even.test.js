const isEven = require('./is_even');

test('1 is false', () => {
  expect(isEven(1)).toBe(false);
});

test('2 is true', () => {
  expect(isEven(2)).toBe(true);
});

test('50 is true', () => {
  expect(isEven(50)).toBe(true);
});

test('75 is false', () => {
  expect(isEven(75)).toBe(false);
});


