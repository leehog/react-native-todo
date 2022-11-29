import { Task } from '../../types/task'

export const finishTask = (tasks: Task[], idToFinish: string) => {
  return tasks.map((task) => {
    if (task.id === idToFinish) {
      return {
        ...task,
        done: !task.done,
      }
    }
    return task
  })
}
