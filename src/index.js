import './styles/style.css';

import Ship from './factories/ship.js';
import Gameboard from './factories/gameboard.js';
import Player from './factories/player.js';

const player = Player('testplayer');
for (let i = 0; i < 100; i++) {
  console.log(player.randomMove(10,10));
}

const testship = Ship([[0,0], [0,1], [0,2]]);
const testship2 = Ship([[0,0], [1,0], [2,0]]);
const board = Gameboard(10, 10);
board.placeShip(testship, 0, 7);
board.placeShip(testship2, 2, 7);
board.receiveAttack(0, 1);
board.receiveAttack(0, 3);

board.printBoard();