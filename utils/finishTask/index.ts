import { Task } from '../../types/task'

export const finishTask = (tasks: Task[], indexToFinish: number) => {
  return tasks.map((task, i) => {
    if (i === indexToFinish) {
      return {
        ...task,
        done: !task.done,
      }
    }
    return task
  })
}
