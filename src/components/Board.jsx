/* eslint-disable react-hooks/exhaustive-deps */
import { VStack, SimpleGrid, Button, Text, } from '@chakra-ui/react'
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { shipTemp, shipCount } from "../funcs/func";

import GuessForm from './GuessForm';
import Tile from './Tile'
import { startGame } from '../actions/gameState';
import { getShipPositions } from '../funcs/getShipPositions';

function Board() {
  const guesses = useSelector(state => state.guesses)
  const nearestShip = useSelector(state => state.nearbyShip)
  const game = useSelector(state => state.gameState)
  const board = useSelector(state => state.board)

  function resetGame() {
    window.location.reload()
  }

  useEffect(() => {
    dispatch(startGame(true))
  },[])

  const dispatch = useDispatch()
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8']

  return (
    <VStack w="full" h="full" p={5}>
        <div>
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
        Ships Remaining: {shipCount(getShipPositions(board).length)}
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
        {board?.map((tile) => 
        <Tile key={tile.id} pos={tile} /> 
        )}
      </SimpleGrid>
      {game ? <GuessForm className='form'/> : <></>}
    </VStack>
  )
}

export default Board;
