import { useSelector } from 'react-redux'
import '../App.css';
import Board from './Board'
import { 
  Flex, 
  Heading, 
  Button, 
  VStack } from '@chakra-ui/react'

function HomePage() {
  const allShips = useSelector(state => state.shipPos)
  const guesses = useSelector(state => state.guesses)

  function resetGame() {
    window.location.reload()
  }

  return (
    <>
        <Flex h={{base: 'auto', md:'100vh'}} py={0}>
          {(guesses.length <= 20 && allShips.length !== 5) 
            ?
            <Board /> 
            : (guesses.length <= 20 && allShips.length === 5) 
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
