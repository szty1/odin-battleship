import Ship from './ship.js';

const Gameboard = (width, height) => {

  // create board 2d array and init slot states
  let board = Array.from(Array(width), () => new Array(height).fill({state:'_', ship: null}));
  let ships = [];

  const getBoard = () => board;

  const setSlotState = (x, y, state, ship = null) => {
    board[x][y] = {state:state, ship:ship};
  }

  const getSlotState = (x, y) => {
    return board[x][y];
  }

  const isSlotAvailable = (coord) =>
  {
    // check if coordinates are valid and return state if true
    if (coord[0] < 0 || coord[1] < 0 || coord[0] >= width || coord[1] >= height) {
      return false;
    } else {
      return (getSlotState(coord[0],coord[1]).state === "_");
    }
  }

  const placeShip = (ship, x, y) => {

    // create an array of ship requested coordinates
    let coordsArray = [];
    ship.getShape().forEach(offset => coordsArray.push([x + offset[0], y + offset[1]]));
  
    // check if all slots are available
    if (coordsArray.every(isSlotAvailable)) {

      // mark ship slots
      coordsArray.forEach((coord) => {
        setSlotState(coord[0], coord[1], 'O', ship);
      });

      // mark neighboring slots as unavaiable for next ships
      coordsArray.forEach((coord) => {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (isSlotAvailable([coord[0] + i, coord[1] + j])) {
              setSlotState(coord[0] + i, coord[1] + j, '.', null);
            }
          }
        } 
      });

      ships.push(ship);
      return true;
    }
    return false;
  }

  const receiveAttack = (x, y) => {

    // get state of selected slot
    const state = getSlotState(x, y);

    // if its a ship, call hit function of ship and set slot state to hit
    if (state.state === 'O') {
      state.ship.hit();
      setSlotState(x, y, 'X', state.ship);
    }

    // set slot state to miss
    else {
      setSlotState(x, y, '+');
    } 

    // return new state of slot
    return getSlotState(x, y);
  }

  const areAllSunk = () => {
    return ships.every((ship) => ship.isSunk());
  }

  const printBoard = () => {

    // prints the board to console (for testing purposes)
    board.forEach(row => {
      let rowdata = [];
      row.forEach(slot => {
        rowdata.push(slot.state);
      });
      console.log(rowdata.join(' | '));
    })
  }

  return {
    getBoard, placeShip, receiveAttack, areAllSunk, printBoard, isSlotAvailable
  }
}

export default Gameboard;