const esf = require('./range');

test('returns a 1,2 array', () => {
  expect(esf.range(1,2)).toStrictEqual(([1,2]));
});

test('returns sum of 1,2 array', () => {
  expect(esf.sum([1,2])).toBe(3);
});


test('returns sum of 1,2..10 array', () => {
  expect(esf.sum(esf.range(1,10))).toBe(55);
});


// range(1, 10, 2)

test('returns a range with a step', () => {
  expect(esf.range(1, 10, 2)).toStrictEqual([1, 3, 5, 7, 9]);
});