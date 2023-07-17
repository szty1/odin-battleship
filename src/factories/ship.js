const Ship = (shape = [[0,0]]) => {
  let hits = 0;
  let sunk = false;
  let size = shape.length;

  const getShape = () => {
    return shape;
  }

  const getSize = () => {
    return size;
  }

  const getHits = () => {
    return hits;
  }

  const hit = () => {
    hits++;
    return hits;
  }

  const isSunk = () => {
    return hits >= size;
  }

  return { getShape, getSize, getHits, hit, isSunk };
}

export default Ship;

