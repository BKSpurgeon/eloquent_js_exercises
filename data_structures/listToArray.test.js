const listToArray = require('./listToArray');


test('converts a list to an array object', () => {
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

  	expect(listToArray(list)).toEqual([1, 2, 3]);  	
});
