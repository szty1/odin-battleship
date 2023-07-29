const Player = (name, computer, board) => {
  let moves = [];
  let lastHit = [];
  const neighbors = [[-1,0],[0,-1],[0,1],[1,0]];
  const sunkNeighbors = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]];

  const getName = () => {
    return name;
  }

  const isComputer = () => {
    return computer;
  }

  const getBoard = () => {
    return board;
  }

  const addMove = (coord) => {
    if (!moves.includes(toString(coord))) {
      moves.push(toString(coord));
      return true;
    } else {
      return false;
    }
  }

  const setLastHit = (coord) => {
    if (coord === null) {
      lastHit = [];
    }
    else {
      lastHit.push(coord);
    }
  }

  // iterate through neighboring tiles if hit a ship or pick a random move
  const smartMove = (size) => {

    // iterate throught lastHit array
    while (lastHit.length > 0) {
      for (let i = 0; i < neighbors.length; i++) {
        let coord = [lastHit.at(-1)[0] + neighbors.at(i)[0], lastHit.at(-1)[1] + neighbors.at(i)[1]];

        // check if coord is valid and is available
        if (isValidCoord(coord, size)) {
          if (!moves.includes(toString(coord))) {
            return coord;
            break;
          }
        }
      }
      lastHit.pop();
    } 

    // find an available random coordinate
    let randomCoord = `${Math.floor(Math.random() * size[0])},${Math.floor(Math.random() * size[1])}`;
    while (moves.includes(randomCoord)) {
      randomCoord = `${Math.floor(Math.random() * size[0])},${Math.floor(Math.random() * size[[1]])}`;
    }
    return toCoords(randomCoord);
  }

  // mark all neighboring tiles of a sunk ship
  const markSunkNeighbors = (ship, size) => {
    const coords = [...ship.getCoords()];
    while (coords.length > 0) {
      for (let i = 0; i < sunkNeighbors.length; i++) {
        let coord = [coords.at(-1)[0] + sunkNeighbors.at(i)[0], coords.at(-1)[1] + sunkNeighbors.at(i)[1]];

        // check if coord is valid and is available
        if (isValidCoord(coord, size)) {
          addMove(coord);
        }
      }
      coords.pop();
    }
  }

  // helper functions to store coords as strings
  const toString = (coord) => {
    return `${coord[0]},${coord[1]}`;
  }

  const toCoords = (coordStr) => {
    const coord = coordStr.split(',');
    return [parseInt(coord[0]), parseInt(coord[1])];
  }

  const isValidCoord = (coord, size) => {
    return (coord[0] >= 0 && coord[0] < size[0] && coord[1] >= 0 && coord[1] < size[1]);
  }

  return { getName, isComputer, getBoard, addMove, setLastHit, smartMove, markSunkNeighbors }
}

export default Player;

