import { TaskList } from './components/templates/taskList'
import { TaskModal } from './components/templates/taskModal'
import { theme } from './theme'
import { Task } from './types/task'
import { createTask } from './utils/createTask'
import { finishTask } from './utils/finishTask'
import { removeTask } from './utils/removeTask'
import { Feather } from '@expo/vector-icons'
import {
  NativeBaseProvider,
  Heading,
  Box,
  Flex,
  IconButton,
  Icon,
  ScrollView,
} from 'native-base'
import { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [showAddTask, setShowAddTask] = useState(false)

  const handleCreateTodo = (newTask: Task) => {
    setTasks((prev) => createTask(prev, newTask))
  }

  const handleDeleteTask = (id: string) => {
    setTasks((prev) => removeTask(prev, id))
  }

  const handleFinishTask = (id: string) => {
    setTasks((prev) => finishTask(prev, id))
  }

  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView>
        <Box height={'100%'} paddingY={10} paddingX={4}>
          <Flex justifyContent={'space-between'} direction={'row'} mb={4}>
            <Heading fontSize={'3xl'} color={'emerald.400'}>
              Task list ({tasks.length})
            </Heading>
            <IconButton
              borderRadius='sm'
              variant='solid'
              icon={<Icon as={Feather} name='plus' size='sm' color={'black'} />}
              onPress={() => setShowAddTask(true)}
            />
          </Flex>
          <TaskModal
            handleSubmit={handleCreateTodo}
            open={showAddTask}
            close={() => setShowAddTask(false)}
          />
          <TaskList
            tasks={tasks}
            finishTask={handleFinishTask}
            deleteTask={handleDeleteTask}
          />
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  )
}
