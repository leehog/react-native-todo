import { Todo } from '../../types/todo'
import { Button, FormControl, Input, Modal, TextArea } from 'native-base'
import { useState } from 'react'

interface Props {
  handleSubmit: (todo: Todo) => void
  open: boolean
  close: () => void
}

const INITIAL_STATE = {
  title: '',
  description: '',
  done: false,
  id: '',
}

export const TodoModal = ({ handleSubmit, open, close }: Props) => {
  const [newTodo, setNewTodo] = useState<Todo>(INITIAL_STATE)

  const createTodo = () => {
    handleSubmit(newTodo)
    setNewTodo(INITIAL_STATE)
    close()
  }

  const handleChange = (key: string, value: string) => {
    setNewTodo((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <Modal isOpen={open} onClose={close}>
      <Modal.Content maxWidth='400px'>
        <Modal.CloseButton />
        <Modal.Header>New task</Modal.Header>
        <Modal.Body>
          <FormControl.Label>Title</FormControl.Label>
          <Input
            isRequired={true}
            variant='rounded'
            placeholder='Name of your task'
            value={newTodo.title}
            onChangeText={(value) => handleChange('title', value)}
          />
          <FormControl.Label>Description</FormControl.Label>
          <TextArea
            isRequired={true}
            autoCompleteType={false}
            h={20}
            placeholder='Describe your task'
            value={newTodo.description}
            onChangeText={(value) => handleChange('description', value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='subtle' onPress={createTodo} width={'100%'}>
            Save
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
