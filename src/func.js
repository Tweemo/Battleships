function getRandomCornerInt() {
  return Math.floor(Math.random() * 2)
}
function getRandomEdgeInt() {
  return Math.floor(Math.random() * 3)
}
function getRandomMiddleInt() {
  return Math.floor(Math.random() * 4)
}

export function checkEdge(ship) {
  if (ship.col === 0 && ship.row === 0) {
    ship.position = 'topLeftCorner'
  } else if (ship.col === 0 && ship.row === 7) {
    ship.position = 'botLeftCorner'
  } else if (ship.col === 7 && ship.row === 0) {
    ship.position = 'topRightCorner'
  } else if (ship.col === 7 && ship.row === 7) {
    ship.position = 'botRightCorner'
  } else if (ship.row === 0) {
    ship.position = 'topEdge'
  } else if (ship.row === 7) {
    ship.position = 'bottomEdge'
  } else if (ship.col === 0) {
    ship.position = 'leftEdge'
  } else if (ship.col === 7) {
    ship.position = 'rightEdge'
  } else {
    ship.position = 'middle'
  }
}

export function makeShip(ship) {
  if (ship.position === 'topLeftCorner') {
    let nearbyShip1 = { ...ship }
    let nearbyShip2 = { ...ship }

    ship.isShip = true

    nearbyShip1.row = 1
    nearbyShip2.col = 1

    let arrayOfShips = [nearbyShip1, nearbyShip2]
    let randomShip = arrayOfShips[getRandomCornerInt()]

    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'botLeftCorner') {
    let nearbyShip1 = { ...ship }
    let nearbyShip2 = { ...ship }

    ship.isShip = true

    nearbyShip1.row = 6
    nearbyShip2.col = 1

    let arrayOfShips = [nearbyShip1, nearbyShip2]
    let randomShip = arrayOfShips[getRandomCornerInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'topRightCorner') {
    let nearbyShip1 = { ...ship }
    let nearbyShip2 = { ...ship }

    ship.isShip = true

    nearbyShip1.row = 1
    nearbyShip2.col = 6

    let arrayOfShips = [nearbyShip1, nearbyShip2]
    let randomShip = arrayOfShips[getRandomCornerInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'botRightCorner') {
    let nearbyShip1 = { ...ship }
    let nearbyShip2 = { ...ship }

    ship.isShip = true

    nearbyShip1.row = 6
    nearbyShip2.col = 6

    let arrayOfShips = [nearbyShip1, nearbyShip2]
    let randomShip = arrayOfShips[getRandomCornerInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'topEdge') {
    let nearbyShip1 = { ...ship }
    let nearbyShip2 = { ...ship }
    let nearbyShip3 = { ...ship }

    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row + 1
    nearbyShip2.col = nearbyShip2.col - 1
    nearbyShip3.col = nearbyShip3.col + 1

    let arrayOfShips = [nearbyShip1, nearbyShip2, nearbyShip3]
    let randomShip = arrayOfShips[getRandomEdgeInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'bottomEdge') {
    let nearbyShip1 = { ...ship }
    let nearbyShip2 = { ...ship }
    let nearbyShip3 = { ...ship }

    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row - 1
    nearbyShip2.col = nearbyShip2.col - 1
    nearbyShip3.col = nearbyShip3.col + 1

    let arrayOfShips = [nearbyShip1, nearbyShip2, nearbyShip3]
    let randomShip = arrayOfShips[getRandomEdgeInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'leftEdge') {
    let nearbyShip1 = { ...ship }
    let nearbyShip2 = { ...ship }
    let nearbyShip3 = { ...ship }

    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row - 1
    nearbyShip2.row = nearbyShip2.row + 1
    nearbyShip3.col = nearbyShip3.col + 1

    let arrayOfShips = [nearbyShip1, nearbyShip2, nearbyShip3]
    let randomShip = arrayOfShips[getRandomEdgeInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'rightEdge') {
    let nearbyShip1 = { ...ship }
    let nearbyShip2 = { ...ship }
    let nearbyShip3 = { ...ship }

    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row - 1
    nearbyShip2.row = nearbyShip2.row + 1
    nearbyShip3.col = nearbyShip3.col - 1

    let arrayOfShips = [nearbyShip1, nearbyShip2, nearbyShip3]
    let randomShip = arrayOfShips[getRandomEdgeInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else {
    let nearbyShip1 = { ...ship }
    let nearbyShip2 = { ...ship }
    let nearbyShip3 = { ...ship }
    let nearbyShip4 = { ...ship }

    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row - 1
    nearbyShip2.row = nearbyShip2.row + 1
    nearbyShip3.col = nearbyShip3.col - 1
    nearbyShip4.col = nearbyShip4.col + 1

    let arrayOfShips = [nearbyShip1, nearbyShip2, nearbyShip3, nearbyShip4]
    let randomShip = arrayOfShips[getRandomMiddleInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  }
}
