import { GAME } from '../actions/gameState'

export default function gameState(state = true, action) {
  switch (action.type) {
    case GAME:
      return action.game

    default:
      return state
  }
}
