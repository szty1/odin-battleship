const Ship = (shape = [[0,0]]) => {
  let hits = 0;
  let sunk = false;
  let size = shape.length;
  let coords = [];

  const getShape = () => {
    return shape;
  }

  const getSize = () => {
    return size;
  }

  const getHits = () => {
    return hits;
  }

  const addCoord = (coord) => {
    coords.push(coord);
  }

  const getCoords = () => {
    return coords;
  }

  const hit = () => {
    hits++;
    return hits;
  }

  const isSunk = () => {
    return hits >= size;
  }

  return { getShape, getSize, getHits, addCoord, getCoords, hit, isSunk };
}

export default Ship;

