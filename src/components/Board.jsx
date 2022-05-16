/* eslint-disable react-hooks/exhaustive-deps */
import { VStack, SimpleGrid, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { checkEdge, makeShip, shipTemp, getShips, shipCount } from "../func";
import {bothShipPos} from '../actions/ships'

import GuessForm from './GuessForm';
import Tile from './Tile'

function Board() {
  const [game, setGame] = useState(false)
  const [liveBoard, setLiveBoard] = useState([])
  const [shipOne, setShipOne] = useState([])
  const [shipTwo, setShipTwo] = useState([])
  
  const oneGuessCoords = useSelector(state => state.oneGuess)
  const guesses = useSelector(state => state.guesses)
  const nearestShip = useSelector(state => state.nearbyShip)
  const allShips = useSelector(state => state.shipPos)
  
  let board = []
  const dispatch = useDispatch()
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8']
  
  function getRandomInt() {
    return Math.floor(Math.random() * board.length)
  }
  function genBoard() {
    let boardSize = 9
    
    for (let r = 1; r < boardSize; r++) {
      for (let c = 1; c < boardSize; c++) {
        board.push({
          row: r,
          col: c,
          isShip: false,
          isVisible: false,
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

  useEffect(() => {
    game ? dispatch(bothShipPos(getShips(shipOne, shipTwo))) : <></>
  },[guesses.length])

  return (
    <VStack w="full" h="full" p={5} spacing={5}>
        <div className="top-line">
        <Button onClick={genBoard}>Start Game</Button>
        </div>
      <div className='start'>
        <div className="top-line">
        Guesses: {guesses.length}
        </div>
        <div className="top-line">
        Proximity: {shipTemp(nearestShip)}
        </div>
        <div className="top-line">
        Ships Remaining: {shipCount(allShips.length)}
        </div>
      </div>

      <div className="horizontal-number-container">
       {game ? numbers.map((number) => {
        return (
          <div className="number">
            {number}
          </div> )
        })
         : <></>
      }
      </div>

      <SimpleGrid bg='blue.200' columns={8} columnGap={1} rowGap={1}>
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
        (tile.row === oneGuessCoords.row && tile.col === oneGuessCoords.col) ? 
          (
            tile.isVisible = true,
            <Tile pos={tile} />
          )
        :
        <Tile pos={tile} /> )
        : 
        <></>
      }
      </SimpleGrid>
      {game ? <GuessForm className='form'/> : <></>}
    </VStack>
  )
}

export default Board;
