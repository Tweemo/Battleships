import React, { useState } from "react"
import {useDispatch} from 'react-redux'
import {guess} from '../actions/guess'
import {formGuess} from '../actions/oneGuess'

function GuessForm() {
  const dispatch = useDispatch()

  const [coords, setCoords] = useState({
    pos: ''
  })

  function changeHandler(e) {
    setCoords({
      ...coords,
      [e.target.name]: e.target.value
    })
  }
  
  function submitHandler(e) {
    e.preventDefault()
    //coords.pos has to be in the form of x,y
    let splitStr = coords.pos.split(',')
    let stringsToNum = [parseInt(splitStr[0]), parseInt(splitStr[1])]
    dispatch(guess(stringsToNum))
    // diff thunk that only shows most recent?
    dispatch(formGuess(stringsToNum))
    setCoords({
      pos: ''
    })
  }


  return (
  <div className="form">
    <form onSubmit={submitHandler}>
      <label>Guess where the ships are </label>
      <input name='pos' type='string' onChange={changeHandler} value={coords.pos} placeholder="row, column e.g 3,5"></input>
    </form>
  </div>
  )
}

export default GuessForm