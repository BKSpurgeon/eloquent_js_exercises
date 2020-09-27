const some = require('./some');

test('some immediately returns after the first item is proven true', () => {
  array = [1,2,3,4];

  const predicateMock = jest.fn( x =>  true );
  some(array, predicateMock);  
  expect(predicateMock.mock.calls.length).toBe(1);
});


test('some are below 10', () => {
  array = [1,2,3,4,4545,45,456,456,34534,345345,3453463567,3453453];

  const predicateMock = jest.fn( x =>  x < 10 );
  expect(some(array, predicateMock)).toBe(true);    
});


/*
test('some is true', () => {
  array = [1,2,3,4];

  const predicateMock = jest.fn( x =>  x < 10 );
  expect(some(array, predicateMock)).toBe(true);    
});

*/
