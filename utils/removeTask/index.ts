import { Task } from '../../types/task'

export const removeTask = (tasks: Task[], idToRemove: string) => {
  return tasks.filter((task) => task.id !== idToRemove)
}
