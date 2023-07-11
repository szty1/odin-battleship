const Ship = require('./ship');

const Gameboard = (width, height) => {
  let grid = Array.from(Array(width), () => new Array(height));

  const isSlotAvailable = (x, y, width, height) => {

  }

  const placeShip = (ship, x, y) => {

  }

  const receiveAttack = (x, y) => {

  }

  const areAllSunk = () => {

  }

  return {
    placeShip, receiveAttack, areAllSunk
  }
}

module.exports = Gameboard;