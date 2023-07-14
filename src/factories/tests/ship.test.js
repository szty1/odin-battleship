import Ship from '../ship';

test('Ship object created', () => {
  expect(Ship()).toMatchObject({
    hit: expect.any(Function),
    isSunk: expect.any(Function)
  });
});

test('hit function', () => {
  const testship = Ship([[0,0], [1,0]]);
  expect(testship.hit()).toBe(1);
});

test('isSunk function', () => {
  const testship = Ship([[0,0]]);
  testship.hit();
  expect(testship.isSunk()).toBe(true);
});

test('return size', () => {
  const testship = Ship([[0,0], [1,0]]);
  expect(testship.getSize()).toBe(2);
});

