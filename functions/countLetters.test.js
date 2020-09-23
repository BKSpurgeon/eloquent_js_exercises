const countLetters = require('./countLetters');

test('B returns 1', () => {
  expect(countLetters("1", "B")).toBe(0);
});


// countLetters("BBC")

test('BBC returns 2', () => {
  expect(countLetters("BBC", "B")).toBe(2);
});