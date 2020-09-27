const every = require('./every');

test('every returns all true', () => {
  array = [1,2,3,4];

  const predicateMock = jest.fn( x =>  true );
  every(array, predicateMock);  
  expect(predicateMock.mock.calls.length).toBe(array.length);
});


test('every has only 4 true', () => {
  array = [1,2,3,4,4545,45,456,456,34534,345345,3453463567,3453453];

  const predicateMock = jest.fn( x =>  x < 10 );
  expect(every(array, predicateMock)).toBe(false);    
});

test('every is true', () => {
  array = [1,2,3,4];

  const predicateMock = jest.fn( x =>  x < 10 );
  expect(every(array, predicateMock)).toBe(true);    
});


