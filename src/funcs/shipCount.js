export function shipCount(ships) {
  if (ships === 4 || ships === 3) {
    return 2
  } else if (ships === 1 || ships === 2) {
    return 1
  } else {
    return 0
  }
}
