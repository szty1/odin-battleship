const Gameboard = require('./gameboard');

test('Gameboard object created', () => {
  expect(Gameboard()).toMatchObject({
    placeShip: expect.any(Function),
    receiveAttack: expect.any(Function),
    areAllSunk: expect.any(Function)
  });
});