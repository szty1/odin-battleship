const Player = (name) => {
  let moves = [];

  const addMove = (coord) => {
    if (!moves.includes(toString(coord))) {
      moves.push(toString(coord));
      return true;
    } else {
      return false;
    }
  }

  const randomMove = (width, height) => {

    let randomCoord = `${Math.floor(Math.random() * width)},${Math.floor(Math.random() * height)}`;
    while (moves.includes(randomCoord)) {
      randomCoord = `${Math.floor(Math.random() * width)},${Math.floor(Math.random() * height)}`;
    }
    return toCoords(randomCoord);
  }

  // helper functions to store coords as strings
  const toString = (coord) => {
    return `${coord[0]},${coord[1]}`;
  }

  const toCoords = (coordStr) => {
    return coordStr.split(',');
  }

  return {
    addMove, randomMove
  }
}

export default Player;

