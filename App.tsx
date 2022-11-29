import { TodoList } from './components/templates/todoList'
import { TodoModal } from './components/templates/todoModal'
import { theme } from './theme'
import { Todo } from './types/todo'
import { Feather } from '@expo/vector-icons'
import {
  NativeBaseProvider,
  View,
  Heading,
  Box,
  Flex,
  IconButton,
  Icon,
} from 'native-base'
import { useState } from 'react'
import uuid from 'react-native-uuid'

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [showAddTodo, setShowAddTodo] = useState(false)

  const handleCreateTodo = (newTodo: Todo) => {
    console.log('Submit')
    setTodos((prev) =>
      prev.concat({
        ...newTodo,
        id: uuid.v4().toString(),
      })
    )
  }

  const handleDeleteTask = (index: number) => {
    setTodos((prev) => prev.filter((todo, i) => i !== index))
  }

  const handleFinishTask = (index: number) => {
    setTodos((prev) =>
      prev.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            done: !todo.done,
          }
        }
        return todo
      })
    )
  }

  return (
    <NativeBaseProvider theme={theme}>
      <View>
        <Box height={'100%'} paddingY={10} paddingX={4}>
          <Flex justifyContent={'space-between'} direction={'row'} mb={4}>
            <Heading fontSize={'3xl'} color={'emerald.400'}>
              Todo app
            </Heading>
            <IconButton
              borderRadius='sm'
              variant='solid'
              icon={<Icon as={Feather} name='plus' size='sm' color={'black'} />}
              onPress={() => setShowAddTodo(true)}
            />
          </Flex>
          <TodoModal
            handleSubmit={handleCreateTodo}
            open={showAddTodo}
            close={() => setShowAddTodo(false)}
          />
          <TodoList
            todos={todos}
            finishTask={handleFinishTask}
            deleteTask={handleDeleteTask}
          />
        </Box>
      </View>
    </NativeBaseProvider>
  )
}
