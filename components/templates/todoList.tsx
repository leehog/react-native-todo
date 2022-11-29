import { Todo } from '../../types/todo'
import { TodoItem } from '../organisms/todoItem'
import { VStack } from 'native-base'

interface Props {
  todos: Todo[]
  finishTask: (index: number) => void
  deleteTask: (index: number) => void
}

export const TodoList = ({ todos, finishTask, deleteTask }: Props) => {
  return (
    <VStack space={4} alignItems='center'>
      {todos.map((todo, i) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          finishTask={() => finishTask(i)}
          deleteTask={() => deleteTask(i)}
        />
      ))}
    </VStack>
  )
}
