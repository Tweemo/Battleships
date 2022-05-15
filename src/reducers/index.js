import { combineReducers } from 'redux'
import guesses from './guesses.js'
import oneGuess from './oneGuess.js'
import shipPos from './ships.js'

export default combineReducers({ guesses, oneGuess, shipPos })
