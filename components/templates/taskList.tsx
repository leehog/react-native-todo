import { Task } from '../../types/task'
import { TaskItem } from '../organisms/taskItem'
import { VStack } from 'native-base'

interface Props {
  tasks: Task[]
  finishTask: (id: string) => void
  deleteTask: (id: string) => void
}

export const TaskList = ({ tasks, finishTask, deleteTask }: Props) => {
  return (
    <VStack space={4} alignItems='center'>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          finishTask={() => finishTask(task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
    </VStack>
  )
}
