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
  const shipSizes = [5,4,3,2,1];
  // const shipSizes = [5];

  // create the players. human player will start the game
  const player  = Player('player', false, Gameboard(boardSize));
  const computer = Player('computer', true, Gameboard(boardSize));  

  const players = [player, computer];
  let current = computer;

   // init display 
  const display = Display();
  
  const init = () => {

    // load html skeleton
    display.loadPage(boardSize);

    players.forEach(player => {
      shipSizes.forEach(size => {

        // select a random ship shape with the specified size
        const shipOffset = randomShipShape(size);

        // place ship at random location on the board
        let rndCoords = randomCoords(boardSize);
        let ship = Ship(shipOffset);
        while(player.getBoard().placeShip(ship, rndCoords) === false) {
          rndCoords = randomCoords(boardSize);
        }
      });

      display.renderBoard(player);
    })

    playRound();
  }

  // update the current player's board and init computer's move
  const playRound = () => {
    toggleEventListeners();
    display.highlight(current);
    display.renderBoard(current);

    if (checkWinner()) return;

    if (current.isComputer()) {
      setTimeout(playComputerMove, 500);
    }
  }

  // record the computer's move and chech if game is over
  const playComputerMove = () => {
    const randomMove = current.randomMove(boardSize);
    current.addMove(randomMove);
    getOtherPlayer().getBoard().receiveAttack(randomMove);
    current = getOtherPlayer();
    playRound();
  }

  // record the player's move and chech if game is over
  const handlePlayerMove = (coord) => {
    if (current === player && player.addMove(coord)) {
      const state = getOtherPlayer().getBoard().receiveAttack(coord);
      switch(state.state) {
        case 'miss':
          display.showMsg("NOTHING THERE");
          break;
        case 'hit':
          display.showMsg("THAT'S A HIT");
          break;
        case 'sunk':
          display.showMsg("THAT'S SHIP HAS SUNK");
          break;
      }
      current = getOtherPlayer();
      playRound();
    }
  }

  // check is current player sunk all ships
  const checkWinner = () => {
    if (current.getBoard().areAllSunk()) {
      display.showWinner(getOtherPlayer());
      return true;
    }
    return false;
  }

  // HELPER FUNCTIONS

  const getOtherPlayer = () => {
    if (current === player) return computer;
    else return player;
  }

  // returns a random shape with the specified size from the shipTypes array
  const randomShipShape = (size) => {
    const shipType = shipTypes.find(element => element.size === size);
    const randomIndex = Math.floor(Math.random() * shipType.shapes.length);
    return shipType.shapes[randomIndex];
  }

  // returns a random 2d coordinate
  const randomCoords = (size) => {
    const x = Math.floor(Math.random() * size[0]);
    const y = Math.floor(Math.random() * size[1]);
    return [x,y];
  }

  // USER INPUT

  // toggle event listeners when player is in/active
  const toggleEventListeners = () => {
    if (current.isComputer()) {
      document.querySelector('.board.computer').removeEventListener('click', handleClick);
    } else {
      document.querySelector('.board.computer').addEventListener('click', handleClick);
    }
  }

  // handle player input
  const handleClick = (e) => {
    if (e.target.dataset.id != undefined) {
      handlePlayerMove(e.target.dataset.id.split(','));
    }
  }

  return { init, playRound }

}

export default GameControl;