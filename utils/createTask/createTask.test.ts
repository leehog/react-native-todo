import { createTask } from './index'

const tasks = [
  {
    id: '1',
    title: '1',
    description: '1',
    done: false,
  },
  {
    id: '2',
    title: '2',
    description: '2',
    done: false,
  },
]

describe('removeTask', () => {
  it('Should return array with all tasks except the removed one', () => {
    const newTask = {
      id: '3',
      title: '3',
      description: '3',
      done: false,
    }
    const expected = [tasks[0], tasks[1], newTask]
    expect(createTask(tasks, newTask)).toEqual(expected)
  })
})
