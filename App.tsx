import { TaskList } from './components/templates/taskList'
import { TaskModal } from './components/templates/taskModal'
import { useTaskStorage } from './hooks/useTaskStorage'
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
import { useCallback, useEffect, useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [showAddTask, setShowAddTask] = useState(false)
  const { savedTasks, updateStoredTasks } = useTaskStorage()

  useEffect(() => {
    console.log('Running saved tasks')
    if (savedTasks.length && tasks.length === 0) {
      console.log('Setting saved tasks')
      setTasks(savedTasks)
    }
  }, [savedTasks, tasks])

  const handleCreateTask = useCallback(
    async (newTask: Task) => {
      try {
        const updatedTasks = createTask(tasks, newTask)
        setTasks(updatedTasks)
        await updateStoredTasks(updatedTasks)
      } catch (e) {
        console.log('Error in create task: ', e)
      }
    },
    [tasks]
  )

  const handleDeleteTask = useCallback(
    async (id: string) => {
      try {
        const updatedTasks = removeTask(tasks, id)
        setTasks(updatedTasks)
        await updateStoredTasks(updatedTasks)
      } catch (e) {
        console.log('Error in delete task: ', e)
      }
    },
    [tasks]
  )

  const handleFinishTask = useCallback(
    async (id: string) => {
      try {
        const updatedTasks = finishTask(tasks, id)
        setTasks(updatedTasks)
        await updateStoredTasks(updatedTasks)
      } catch (e) {
        console.log('Error in finish task: ', e)
      }
    },
    [tasks]
  )

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
            handleSubmit={handleCreateTask}
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
