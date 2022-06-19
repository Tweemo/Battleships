export const GAME = 'GAME'

export function startGame(gameOn) {
  return {
    type: GAME,
    game: gameOn,
  }
}
