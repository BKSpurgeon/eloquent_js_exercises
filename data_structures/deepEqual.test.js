const deepEqual = require('./deepEqual');

test('test deep equality', () => {
	let obj = {here: {is: "an"}, object: 2};

  	expect(deepEqual(obj, obj)).toEqual(true);  	
});


test('test deep equality - true', () => {
	let obj = {here: {is: "an"}, object: 2};
	let obj2 = {here: {is: "an"}, object: 2};
  	expect(deepEqual(obj, obj2)).toEqual(true);  	
});


test('test deep equality - false', () => {
	let obj = {here: {is: "an"}, object: 2};

  	expect(deepEqual(obj, {here: 1, object: 2})).toEqual(false);  	
});

