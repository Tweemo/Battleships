/* eslint-disable react-hooks/exhaustive-deps */
import { VStack, SimpleGrid, Button, Text, } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { checkEdge, makeShip, shipTemp, getShips, shipCount } from "../funcs/func";
import {bothShipPos} from '../actions/ships'

import GuessForm from './GuessForm';
import Tile from './Tile'
import { startGame } from '../actions/gameState';
import { setBoard } from '../actions/board';

function Board() {
  // const [game, setGame] = useState(false)
  const [liveBoard, setLiveBoard] = useState([])
  const [shipOne, setShipOne] = useState([])
  const [shipTwo, setShipTwo] = useState([])
  
  const guesses = useSelector(state => state.guesses)
  const nearestShip = useSelector(state => state.nearbyShip)
  const allShips = useSelector(state => state.shipPos)
  const game = useSelector(state => state.gameState)
  const board = useSelector(state => state.board[0])

  function resetGame() {
    window.location.reload()
  }

  useEffect(() => {
    dispatch(startGame(true))
  },[])
  
  useEffect(() => {
    console.log(board)
  })
  
  let shipObj = []
  allShips.map((ship) => {
    if (ship.isVisible !== true) {
      shipObj.push(ship)
    }
    return 'Ships working'
  })

  const dispatch = useDispatch()
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8']
  
  function getRandomInt() {
    return Math.floor(Math.random() * board.length)
  }

  function addShips() {
    const ship1 = board[getRandomInt()]
    const ship2 = board[getRandomInt()]
    checkEdge(ship1)
    checkEdge(ship2)

    const arrShips = [...makeShip(ship1), ...makeShip(ship2)]

    // Once ships are created, map through the current board and add the ships in,
    // then dispatch the new board to the store.
    // this means that the board will be updated with the ships.
    // theoretically this means we dont need to have extra code when mapping throug hthe board further down. 
    board.map(tile => {
      arrShips.map(ship => {
        if (ship.row === tile.row && tile.col === ship.col) {
          tile.isShip = true
          return tile
        }
      return tile
    })
    dispatch(setBoard(board))
  })
}



  // useEffect(() => {
  //   game ? 
  //   dispatch(bothShipPos(getShips(shipOne, shipTwo))) 
  //   : <></>
  // },[liveBoard, guesses.length])
  // console.log(liveBoard)

  return (
    <VStack w="full" h="full" p={5}>
        <div>
          <Button onClick={addShips}>Start Game</Button>
          <Button onClick={resetGame}>Reset</Button>
        </div>
      <div className='start'>
        <div className="top-line">
        Guesses remaining: {20 - guesses.length}
        </div>
        <div className="top-line">
        Proximity: {shipTemp(nearestShip)}
        </div>
        <div className="top-line">
        Ships Remaining: {shipCount(shipObj.length)}
        </div>
      </div>
      <div className="horizontal-number-container">
       {game ? numbers.map((number) => {
        return (
          <Text p={{base: 4, md: 5}} w={{base: '3vh', md: '4vw'}} h={{base: '4vh', md: '4vw'}}>
            {number}
          </Text> )
        })
         : <></>
      }
      </div>
      <SimpleGrid  columns={8} columnGap={1} rowGap={1}>
        {liveBoard.map((tile) => 
        (tile.row === shipOne[0].row && tile.col === shipOne[0].col) ?
        <Tile key={tile.id} pos={shipOne[0]} /> 
        :
        (tile.row === shipOne[1].row && tile.col === shipOne[1].col) ?
        <Tile key={tile.id} pos={shipOne[1]} /> 
        :
        (tile.row === shipTwo[0].row && tile.col === shipTwo[0].col) ?
        <Tile key={tile.id} pos={shipTwo[0]} /> 
        :
        (tile.row === shipTwo[1].row && tile.col === shipTwo[1].col) ?
        <Tile key={tile.id} pos={shipTwo[1]} /> 
        :
        <Tile key={tile.id} pos={tile} /> 
        )
        // : 
        // <></>
        }
      </SimpleGrid>
      {game ? <GuessForm className='form'/> : <></>}
    </VStack>
  )
}

export default Board;
