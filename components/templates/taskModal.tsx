import { Task } from '../../types/task'
import { Button, FormControl, Input, Modal, TextArea } from 'native-base'
import { useState } from 'react'
import uuid from 'react-native-uuid'

interface Props {
  handleSubmit: (task: Task) => Promise<void>
  open: boolean
  close: () => void
}

const INITIAL_STATE = {
  title: '',
  description: '',
  done: false,
  id: '',
}

export const TaskModal = ({ handleSubmit, open, close }: Props) => {
  const [newTask, setNewTask] = useState<Task>(INITIAL_STATE)

  const createTodo = () => {
    handleSubmit({ ...newTask, id: uuid.v4().toString() })
    setNewTask(INITIAL_STATE)
    close()
  }

  const handleChange = (key: string, value: string) => {
    setNewTask((prev) => ({
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
            value={newTask.title}
            onChangeText={(value) => handleChange('title', value)}
          />
          <FormControl.Label>Description</FormControl.Label>
          <TextArea
            isRequired={true}
            autoCompleteType
            h={20}
            placeholder='Describe your task'
            value={newTask.description}
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
