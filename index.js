import _ from 'lodash';
import Ship from './ship.js';
import Gameboard from './gameboard.js';

const testship = Ship([[0,0], [0,1], [0,2]]);
const board = Gameboard(10, 10);
board.placeShip(testship, 0, 7);
board.receiveAttack(0, 1);
board.receiveAttack(0, 3);

board.printBoard();