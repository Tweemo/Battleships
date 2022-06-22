export function checkEdge(ship) {
  if (ship.col === 1 && ship.row === 1) {
    ship.position = 'topLeftCorner'
  } else if (ship.col === 1 && ship.row === 8) {
    ship.position = 'botLeftCorner'
  } else if (ship.col === 8 && ship.row === 1) {
    ship.position = 'topRightCorner'
  } else if (ship.col === 8 && ship.row === 8) {
    ship.position = 'botRightCorner'
  } else if (ship.row === 1) {
    ship.position = 'topEdge'
  } else if (ship.row === 8) {
    ship.position = 'bottomEdge'
  } else if (ship.col === 1) {
    ship.position = 'leftEdge'
  } else if (ship.col === 8) {
    ship.position = 'rightEdge'
  } else {
    ship.position = 'middle'
  }
}
