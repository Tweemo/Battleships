import { GAME } from '../actions/gameState'

let gameOn = false

export default function gameState(state = gameOn, action) {
  switch (action.type) {
    case GAME:
      return action.game

    default:
      return state
  }
}
