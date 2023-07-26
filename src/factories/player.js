const Player = (name, computer, board) => {
  let moves = [];

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

  // pick a random move
  const randomMove = (size) => {

    let randomCoord = `${Math.floor(Math.random() * size[0])},${Math.floor(Math.random() * size[1])}`;
    while (moves.includes(randomCoord)) {
      randomCoord = `${Math.floor(Math.random() * size[0])},${Math.floor(Math.random() * size[[1]])}`;
    }
    return toCoords(randomCoord);
  }

  const smartMove = (size) => {
    
  }

  // helper functions to store coords as strings
  const toString = (coord) => {
    return `${coord[0]},${coord[1]}`;
  }

  const toCoords = (coordStr) => {
    return coordStr.split(',');
  }

  return { getName, isComputer, getBoard, addMove, randomMove }
}

export default Player;

