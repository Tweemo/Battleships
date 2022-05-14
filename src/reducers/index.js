import { combineReducers } from 'redux'
import guesses from './guesses.js'
import oneGuess from './oneGuess.js'

export default combineReducers({ guesses, oneGuess })
