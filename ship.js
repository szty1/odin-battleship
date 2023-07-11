const Ship = (xsize, ysize) => {
  let hits = 0;
  let sunk = false;

  const hit = () => {
    hits++;
    return hits;
  }

  const isSunk = () => {
    return hits >= xsize * ysize;
  }

  return {hit, isSunk}
}

module.exports = Ship;

