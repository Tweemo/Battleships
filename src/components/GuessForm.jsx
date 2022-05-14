import React, { useState } from "react"
import {useDispatch} from 'react-redux'
import {guess} from '../actions/guess'
let totalGuesses = 0

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
    console.log(splitStr)
    dispatch(guess(splitStr))
    
    setCoords({
      pos: ''
    })
    totalGuesses++
  }


  return (
  <>
    <form onSubmit={submitHandler}>
    <label>Guess where the ships are </label>
    <input name='pos' type='string' onChange={changeHandler} value={coords.pos} placeholder="row, column e.g 3,5"></input>
  </form>
  </>
  )
}

export default GuessForm