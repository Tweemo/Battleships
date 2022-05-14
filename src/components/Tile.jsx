import React from "react";
import {useDispatch} from 'react-redux'
import {guess} from '../actions/guess'
import '../App.css';

function Tile(tile) {
  const dispatch = useDispatch()
  const position = tile.pos
  let splitStr = [position.row, position.col]
  
  function clickHandler() {
    dispatch(guess(splitStr))
    console.log(tile.pos)
  }

  return (
  <div onClick={clickHandler} className="tile">
  {position.row}
  {position.col}
  </div>
  )
}

export default Tile