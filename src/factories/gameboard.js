const Gameboard = (boardSize) => {

  // create board 2d array and init slot states
  let board = Array.from(Array(boardSize[0]), () => new Array(boardSize[1]).fill({state:'empty', ship: null}));
  let ships = [];

  const getBoard = () => board;

  const setSlotState = (coord, state, ship = null) => {
    board[coord[0]][coord[1]] = {state:state, ship:ship};
  }

  const getSlotState = (coord) => {
    return board[coord[0]][coord[1]];
  }

  const isSlotAvailable = (coord) =>
  {
    // check if coordinates are valid and return state if true
    if (coord[0] < 0 || coord[1] < 0 || coord[0] >= boardSize[0] || coord[1] >= boardSize[1]) {
      return false;
    } else {
      return (getSlotState(coord).state === "empty");
    }
  }

  const placeShip = (ship, coord) => {

    // create an array of ship requested coordinates
    let coordsArray = [];
    ship.getShape().forEach(offset => coordsArray.push([coord[0] + offset[0], coord[1] + offset[1]]));
  
    // check if all slots are available
    if (coordsArray.every(isSlotAvailable)) {

      // mark ship slots
      coordsArray.forEach((coord) => {
        ship.addCoord(coord);
        setSlotState(coord, 'ship', ship);
      });

      // mark neighboring slots as unavaiable for next ships
      coordsArray.forEach((coord) => {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (isSlotAvailable([coord[0] + i, coord[1] + j])) {
              setSlotState([coord[0] + i, coord[1] + j], 'na', null);
            }
          }
        } 
      });

      ships.push(ship);
      return true;
    }
    return false;
  }

  const receiveAttack = (coord) => {

    // get state of selected slot
    const state = getSlotState(coord);

    // if its a ship, call hit function of ship and set slot state to hit
    if (state.state === 'ship') {
      state.ship.hit();
      if (state.ship.isSunk()) {
        setShipSunk(state.ship);
      }
      else {
        setSlotState(coord, 'hit', state.ship);
      } 
    }

    // set slot state to miss
    else {
      setSlotState(coord, 'miss');
    } 

    // return new state of slot
    return getSlotState(coord);
  }

  const setShipSunk = (ship) => {
    ship.getCoords().forEach(coord => {
      setSlotState(coord, 'sunk', ship);
    });
  } 

  const areAllSunk = () => {
    return ships.every((ship) => ship.isSunk());
  }

  return { getBoard, placeShip, receiveAttack, areAllSunk, isSlotAvailable }
}

export default Gameboard;