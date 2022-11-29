import { Task } from '../../types/task'

export const createTask = (tasks: Task[], newTask: Task) => {
  return tasks.concat(newTask)
}
