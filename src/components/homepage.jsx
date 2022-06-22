import { useSelector } from 'react-redux'
import '../App.css';
import Board from './Board'
import { 
  Flex, 
  Heading, 
  Button, 
  VStack } from '@chakra-ui/react'

function HomePage() {
  const guesses = useSelector(state => state.guesses)
  const gameState = useSelector(state => state.gameState)

  function resetGame() {
    window.location.reload()
  }

  return (
    <>
        <Flex h={{base: 'auto', md:'100vh'}} py={0}>
          {(guesses.length <= 20 && gameState === true) 
            ?
            <Board /> 
            : (guesses.length <= 20 && gameState === false) 
            ? 
            <VStack w='100vw' className='end'>
              <Heading>Congratulations! You found all the ships in less than 20 guesses!</Heading>
              <Button onClick={resetGame}>Reset</Button>
            </VStack>
            : 
            <VStack w='100vw' className='end'>
                <Heading>Unfortunately you didn't find all the ships.</Heading>
                <Button onClick={resetGame}>Reset</Button>
            </VStack>
            }
        </Flex>
    </>
  )
}

export default HomePage;
