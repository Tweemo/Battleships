export function getShips(shipOne, shipTwo) {
  if (
    shipOne[0].isVisible === true &&
    shipOne[1].isVisible === true &&
    shipTwo[0].isVisible !== true &&
    shipTwo[1].isVisible !== true
  ) {
    return [...shipTwo]
  } else if (
    shipTwo[0].isVisible === true &&
    shipTwo[1].isVisible === true &&
    shipOne[0].isVisible !== true &&
    shipOne[1].isVisible !== true
  ) {
    return [...shipOne]
  } else if (
    shipTwo[0].isVisible === true &&
    shipTwo[1].isVisible === true &&
    shipOne[0].isVisible === true &&
    shipOne[1].isVisible === true
  ) {
    return ['you', 'found', 'all', 'the', 'ships']
  } else {
    return [...shipOne, ...shipTwo]
  }
}
