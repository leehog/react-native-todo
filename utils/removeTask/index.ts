import { Task } from '../../types/task'

export const removeTask = (tasks: Task[], indexToRemove: number) => {
  return tasks.filter((todo, i) => i !== indexToRemove)
}
