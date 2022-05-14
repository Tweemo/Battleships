// function getRandomInt() {
//   return Math.floor(Math.random() * 3)
// }

export function checkEdge(ship) {
  if (ship.col === 0 && ship.row === 0) {
    ship.topLeftCorner = true
  } else if (ship.col === 0 && ship.row === 7) {
    ship.botLeftCorner = true
  } else if (ship.col === 7 && ship.row === 0) {
    ship.topRightCorner = true
  } else if (ship.col === 7 && ship.row === 7) {
    ship.botRightCorner = true
  } else if (ship.row === 0) {
    ship.topEdge = true
  } else if (ship.row === 7) {
    ship.bottomEdge = true
  } else if (ship.col === 0) {
    ship.leftEdge = true
  } else if (ship.col === 7) {
    ship.rightEdge = true
  } else {
    ship.middle = true
  }
  console.log(ship)
}

export function makeShip(board, ship) {
  if (ship) ship.ship = true
  console.log(ship)
}
