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
  let shipIndex = 0;
  let shipShape = 0;

  // create the players. human player will start the game
  let player = Player('player', false, Gameboard(boardSize));
  let computer = Player('computer', true, Gameboard(boardSize));  
  let current = computer;

   // init display 
  const display = Display();
  
  const init = () => {

    // load html skeleton
    display.loadPage(boardSize);
    display.renderShipPlacementBoard(player);
    addShipPlacementListeners();
  }

  const placePlayerShip = (coord) => {
    coord[0] = parseInt(coord[0]);
    coord[1] = parseInt(coord[1]);

    const shipOffset = getShipShape(shipSizes[shipIndex], shipShape);
    let ship = Ship(shipOffset);
    if (player.getBoard().placeShip(ship, coord) === false) {
      return false;
    }
    else {
      display.renderShipPlacementBoard(player);
      if (shipIndex < shipSizes.length -1) {
        shipIndex++;
        shipShape = 0;
      }
      else {
        removeShipPlacementListeners();
        display.renderBoard(player);
        placeComputerShips();
        playRound();
      }
    }
  }

  const placeComputerShips = () => {
    shipSizes.forEach(size => {

      // select a random ship shape with the specified size
      const shipOffset = randomShipShape(size);

      // place ship at random location on the board
      let rndCoords = randomCoords(boardSize);
      let ship = Ship(shipOffset);
      while(computer.getBoard().placeShip(ship, rndCoords) === false) {
        rndCoords = randomCoords(boardSize);
      }
    });
  }

  const changeShipShape = () => {
    shipShape++;
    const shipType = shipTypes.find(element => element.size === shipSizes(shipIndex));
    if (shipShape >= shipType.length) {
      shipShape = 0;
    }
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
    const move = current.smartMove(boardSize);
    current.addMove(move);
    const state = getOtherPlayer().getBoard().receiveAttack(move);
    switch(state.state) {
      case 'hit':
        current.setLastHit(move);
        break;
      case 'sunk':
        current.setLastHit(move);
        current.markSunkNeighbors(state.ship, boardSize);
        break;
    }
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
          display.showMsg("THAT SHIP HAS SUNK");
          break;
      }
      current = getOtherPlayer();
      playRound();
    }
  }

  // check is current player sunk all ships
  const checkWinner = () => {
    if (current.getBoard().areAllSunk()) {
      display.renderBoard(computer, true);
      display.showWinner(getOtherPlayer());
      display.showNewGameBtn();
      gameOverEventListeners();
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

  // returns shape with the specified index from the shipTypes array
  const getShipShape = (size, index = 0) => {
    const shipType = shipTypes.find(element => element.size === size);
    return shipType.shapes[index];
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
      document.querySelector('.board.computer').removeEventListener('click', handleTileClick);
    } else {
      document.querySelector('.board.computer').addEventListener('click', handleTileClick);
    }
  }

  // add event listeners when player is placing ship
  const addShipPlacementListeners = () => {
    document.querySelector('.board.player').addEventListener('click', handlePlacementTileClick);
    document.querySelector('.board.player').addEventListener('contextmenu', handleRightClick);

  }

  // add event listeners when player is placing ship
  const removeShipPlacementListeners = () => {
    document.querySelector('.board.player').removeEventListener('click', handlePlacementTileClick);
    document.querySelector('.board.player').removeEventListener('contextmenu', handleRightClick);

  }

  // remove event listeners
  const gameOverEventListeners = () => {
    document.querySelector('.board.computer').removeEventListener('click', handleTileClick);
    document.querySelector('.newgame input').addEventListener('click', handleNewGameBtnClick);

  }

  // handle player input
  const handleTileClick = (e) => {
    if (e.target.dataset.id != undefined) {
      handlePlayerMove(e.target.dataset.id.split(','));
    }
  }

  const handleNewGameBtnClick = (e) => {
    player = Player('player', false, Gameboard(boardSize));
    computer = Player('computer', true, Gameboard(boardSize));  
    current = computer;
    shipIndex = 0;
    init();
  }

  const handlePlacementTileClick = (e) => { 
    if (e.target.dataset.id != undefined) {
      placePlayerShip(e.target.dataset.id.split(','));
    }
  }

  const handleRightClick = (e) => { 
    if (e.target.dataset.id != undefined) {
      e.preventDefault();
      changeShipShape();
      return false;
    }
  }

  return { init, playRound }

}

export default GameControl;