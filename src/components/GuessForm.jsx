/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { FormLabel, VStack, Input } from "@chakra-ui/react";

import { shipCount, checkDist, getShipPositions } from "../funcs";
import { formGuess, closestShip, startGame } from '../actions'

function GuessForm() {
  const board = useSelector(state => state.board)
  const guesses = useSelector(state => state.guesses)

  const dispatch = useDispatch()
  const [coords, setCoords] = useState({
    pos: ''
  })
  
  function checkIfGameCompleted() {
    if ((shipCount(getShipPositions(board).length)) === 0) {
      dispatch(startGame(false))
    } 
    return 'Game still going'
  }

  useEffect(() => {
    checkIfGameCompleted()
  },[guesses])
  
  function changeHandler(e) {
    setCoords({
      ...coords,
      [e.target.name]: e.target.value
    })
  }

  function submitHandler(e) {
    e.preventDefault()
    let splitStr = coords.pos.split(',')
    if (splitStr[0] >= 1 && splitStr[0] <= 8 && splitStr[1] >= 1 && splitStr[1] <= 8) {
      let stringsToNum = {row: parseInt(splitStr[0]), col: parseInt(splitStr[1])}
      dispatch(formGuess(stringsToNum))
      dispatch(closestShip(checkDist(getShipPositions(board), stringsToNum)))
      setCoords({
        pos: ''
      })
    } else {
      alert('Needs to be in the format x,y and between 1 and 8!')
    }
  }

  return (
    <VStack className="form">
      <form onSubmit={submitHandler}>
        <FormLabel>Guess where the ships are </FormLabel>
        <Input variant='filled' name='pos' type='text' onChange={changeHandler} value={coords.pos} placeholder="row, column e.g 3,5"></Input>
      </form>
    </VStack>
  )
}

export default GuessForm