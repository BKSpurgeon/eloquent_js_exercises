const Group = require('./group');

test('group adds and has a value', () => {
  let g = new Group();
  g.add("test");
  expect(g.has("test")).toBe(true)
});


test('group adds and has and removes a value', () => {
  let g = new Group();  
  g.add("test");
  expect(g.has("test")).toBe(true);
  g.remove("test");
  expect(g.has("test")).toBe(false);
});


test('group has a from static method', () => {
  let g = Group.from([10,20]);  
  expect(g.has(10)).toBe(true);  
  expect(g.has(30)).toBe(false);
});
