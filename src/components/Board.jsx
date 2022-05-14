import React, { useState } from "react";
import Tile from './Tile'
import { checkEdge, makeShip } from "../func";
import '../App.css';

function Board() {
  const [game, setGame] = useState(false)
  const [liveBoard, setLiveBoard] = useState([])
  const [shipOne, setShipOne] = useState([])
  const [shipTwo, setShipTwo] = useState([])
  
  let board = []

  function getRandomInt() {
    return Math.floor(Math.random() * board.length)
  }

  
  function genBoard() {
    let boardSize = 8
    
    for (let r = 0; r < boardSize; r++) {
      for (let c = 0; c < boardSize; c++) {
        board.push({
          row: r,
          col: c,
          isVisible: false,
          isShip: false,
          isClicked: false
        })
      }
    }
    setGame(true)
    const ship1 = board[getRandomInt()]
    const ship2 = board[getRandomInt()]
    checkEdge(ship1)
    checkEdge(ship2)
    setShipOne(makeShip(ship1))
    setShipTwo(makeShip(ship2))
    setLiveBoard(board)
  }
  return (
    <>
      <button onClick={genBoard}>Start Game</button>
      <div className="board">
      {game ? liveBoard.map((tile) => 
      (tile.row === shipOne[0].row && tile.col === shipOne[0].col) ?
      <Tile pos={shipOne[0]} /> 
      :
      (tile.row === shipOne[1].row && tile.col === shipOne[1].col) ?
      <Tile pos={shipOne[1]} /> 
      :
      (tile.row === shipTwo[0].row && tile.col === shipTwo[0].col) ?
      <Tile pos={shipTwo[0]} /> 
      :
      (tile.row === shipTwo[1].row && tile.col === shipTwo[1].col) ?
      <Tile pos={shipTwo[1]} /> 
      :
      <Tile pos={tile} /> )
      : 
      <h1>Press Start to generate the board!</h1>}
      </div>
    </>
  )
}

export default Board;
