import Display from './display.js'
import Ship from '../factories/ship.js';
import Gameboard from '../factories/gameboard.js';
import Player from '../factories/player.js';
import shipTypes from './shipTypes.js';

const GameControl = () => {

  // board size (standard is 10 by 10)
  const boardSize = [10,10];

  // ship sizes and shapes. supports irregular shaped ships,
  // as we used to play it in school :)
  // TODO: allow players to choose custom shapes
  const shipSizes = [5,4,3,3,2,2,1,1];

  // create the players. human player will start the game
  const player  = Player('player', false, Gameboard(boardSize[0], boardSize[1]));
  const computer = Player('computer', true, Gameboard(boardSize[0], boardSize[1]));  

  const players = [player, computer];
  let currentplayer = 0;

   // init display 
  const display = Display();
  
  const init = () => {

    // load html skeleton
    display.loadPage();

    players.forEach(player => {
      shipSizes.forEach(size => {

        // select a random ship shape with the specified size
        const shipOffset = randomShipShape(size);

        // place ship at random location on the board
        let rndCoords = randomCoords(boardSize[0], boardSize[1]);
        let ship = Ship(shipOffset);
        while(player.getBoard().placeShip(ship, rndCoords) === false) {
          rndCoords = randomCoords(boardSize[0], boardSize[1]);
        }
      });

      display.loadBoard(player);
    })
  } 

  // returns a random shape with the specified size from the shipTypes array
  const randomShipShape = (size) => {
    const shipType = shipTypes.find(element => element.size === size);
    const randomIndex = Math.floor(Math.random() * shipType.shapes.length);
    return shipType.shapes[randomIndex];
  }

  // returns a random 2d coordinate
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