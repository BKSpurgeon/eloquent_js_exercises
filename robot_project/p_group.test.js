const {PGroup} = require('./p_group');

test('group has an empty static method', () => {
  let pgroup = PGroup.empty;  
  expect(pgroup).toEqual(new PGroup());
  expect(pgroup.array).toEqual([]);
});


test('group adds', () => {
  let pgroup = PGroup.empty;    
  let a = pgroup.add("a");
  expect(a.array).toEqual(["a"]);  
});


test('group deletes', () => {
  let pgroup = PGroup.empty;    
  let a = pgroup.add("a");
  let b = a.delete("a")
  expect(b.has("a")).toEqual(false);  
});
