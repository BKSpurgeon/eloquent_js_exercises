const loop = require('./loop');

test('body is called n times', () => {
  let n = 10;  
  const mockBody = jest.fn( x =>  console.log );
  loop(10, n => n > 0, n => n-1, mockBody);  

  expect(mockBody.mock.calls.length).toBe(n);
});


