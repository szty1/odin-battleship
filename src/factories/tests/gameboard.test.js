import Ship from '../ship';
import Gameboard from '../gameboard';

test('Gameboard object created', () => {
  expect(Gameboard()).toMatchObject({
    placeShip: expect.any(Function),
    receiveAttack: expect.any(Function),
    areAllSunk: expect.any(Function)
  });
});

test('placeShip function', () => {
  const testship = Ship([[0,0], [1,0], [1,1]]);
  const board = Gameboard(10, 10);
  expect(board.placeShip(testship, 0, 0)).toBe(true);
});

test('receiveAttack function', () => {
  const testship = Ship([[0,0], [1,0], [1,1]]);
  const board = Gameboard(10, 10);
  board.placeShip(testship, 0, 0);
  expect(board.receiveAttack(1, 1).state).toBe('X');
});

test('areAllSunk function', () => {
  const board = Gameboard(10, 10);
  expect(board.areAllSunk()).toBe(true);
});