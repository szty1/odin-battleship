import Display from './display.js'
import Ship from '../factories/ship.js';
import Gameboard from '../factories/gameboard.js';
import Player from '../factories/player.js';

const GameControl = () => {

  // board size (standard is 10 by 10)
  const size = [10,10];

  // ship sizes and shapes. supports irregular shaped ships, as we used to play it in school :)
  const ships = [
    [[0,0], [0,1], [0,2], [0,3], [0,4], [0,5]],
    [[0,0], [1,0], [2,0], [3,0]],
    [[0,0], [0,1], [0,2]],
    [[0,0], [0,1]],
    [[0,0], [1,0]],
    [[0,0]],
    [[0,0]],
    [[0,0]]
  ];

  // create the players. human player will start the game
  const player  = Player('player', false, Gameboard(size[0], size[1]));
  const computer = Player('computer', true, Gameboard(size[0], size[1]));  

  const players = [player, computer];
  let currentplayer = 0;

   // init display 
  const display = Display();
  
  const init = () => {

    players.forEach(player => {

      // place ships at random locations on the boards
      ships.forEach(shipOffset => {
        let rndCoords = randomCoords(size[0], size[1]);
        let ship = Ship(shipOffset);
        while(player.getBoard().placeShip(ship, rndCoords) === false) {
          rndCoords = randomCoords(size[0], size[1]);
        }
      });

      console.log(player.getName());
      display.printBoard(player.getBoard().getBoard());
    })
  } 

  const randomCoords = (width, height) => {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    return [x,y];
  }

  const playMove = () => {

  }

  return { init }

}

export default GameControl;