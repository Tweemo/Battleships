import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setBoard } from '../actions';
import { addShips } from '../funcs';

function ManualClose() {
  const board = useSelector(state => state.board)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()

  useEffect(() => {
    onOpen()
  },[onOpen])

  function startGame() {
    onClose()
    dispatch(setBoard(addShips(board)))
  }

  return (
      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How To Play</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
              You have 20 attempts to locate and sink the 2 ships on the map. 
              <br></br>
              After each shot, you will be able to see how close you are based on the proximity meter above.
              <br></br>
              That map will have TWO 1x2 ships.
              <br></br>
          </ModalBody>
          <ModalFooter>
            <Button onClick={startGame} colorScheme='blue' mr={3}>
              Start
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default ManualClose