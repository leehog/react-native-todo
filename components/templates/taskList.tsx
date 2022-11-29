import { Task } from '../../types/task'
import { TaskItem } from '../organisms/taskItem'
import { VStack } from 'native-base'

interface Props {
  tasks: Task[]
  finishTask: (index: number) => void
  deleteTask: (index: number) => void
}

export const TaskList = ({ tasks, finishTask, deleteTask }: Props) => {
  return (
    <VStack space={4} alignItems='center'>
      {tasks.map((task, i) => (
        <TaskItem
          key={task.id}
          task={task}
          finishTask={() => finishTask(i)}
          deleteTask={() => deleteTask(i)}
        />
      ))}
    </VStack>
  )
}
