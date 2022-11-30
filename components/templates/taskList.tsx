import { Task } from '../../types/task'
import { TaskItem } from '../organisms/taskItem'
import { VStack } from 'native-base'

interface Props {
  tasks: Task[]
  finishTask: (id: string) => Promise<void>
  deleteTask: (id: string) => Promise<void>
}

export const TaskList = ({ tasks, finishTask, deleteTask }: Props) => {
  return (
    <VStack space={4} alignItems='center'>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          finishTask={async () => await finishTask(task.id)}
          deleteTask={async () => await deleteTask(task.id)}
        />
      ))}
    </VStack>
  )
}
