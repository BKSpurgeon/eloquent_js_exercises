const {reliableMultiply} = require('./multiplication_unit_failure');


test('reliableMultiply does not throw errors', () => {	
	expect(() => {reliableMultiply(12,23)}).not.toThrowError('Klunk')	
});

test('reliableMultiply does not throw errors', () => {	
	expect(reliableMultiply(12,23)).toEqual(276)	
});


/*
// If we want to run the test multiple times

for i in `seq 1 30`; do 
  jest ./multiplication_unit_failure.test.js
done

*/