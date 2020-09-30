
const Vector = require('./vector');

test('vector plus method', () => {
  v = new Vector(1,2);   

  expect(v.plus(v) instanceof Vector).toBe(true)
  expect(v.plus(v).x).toBe(2)
  expect(v.plus(v).y).toBe(4)
});

test('vector minus method', () => {
  v = new Vector(1,2);   

  expect(v.minus(v) instanceof Vector).toBe(true)
  expect(v.minus(v).x).toBe(0)
  expect(v.minus(v).y).toBe(0)
});


test('length property added as a prototype', () => {
  v = new Vector(3,4);   
  expect(v.length).toBe(5)  
});



