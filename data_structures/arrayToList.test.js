const arrayToList = require('./arrayToList');

test('converts an array to a list object', () => {
		let list = {
				  value: 1,
				  rest: {
				    value: 2,
				    rest: {
				      value: 3,
				      rest: null
				    }
				  }
				};

  	expect(arrayToList([1, 2, 3])).toEqual(list);
});
