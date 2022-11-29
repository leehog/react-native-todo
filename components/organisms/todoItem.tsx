import { Todo } from '../../types/todo'
import { AntDesign } from '@expo/vector-icons'
import { Text, Box, Flex, Checkbox, IconButton, Icon } from 'native-base'
import { memo } from 'react'

interface Props {
  todo: Todo
  deleteTask: () => void
  finishTask: () => void
}

export const TodoItemNonMemoized = ({
  todo,
  deleteTask,
  finishTask,
}: Props) => {
  return (
    <Box
      key={todo.id}
      w='100%'
      h='20'
      bg='emerald.300'
      rounded='md'
      shadow={3}
      py={2}
      px={4}
    >
      <Flex direction={'row'} alignItems={'center'}>
        <Checkbox
          value={todo.done ? 'checked' : ''}
          onChange={finishTask}
          isChecked={todo.done}
          colorScheme='green'
          accessibilityLabel={'Finish task'}
        />
        <Box ml={4}>
          <Text fontSize={'xl'}>{todo.title}</Text>
          <Text>{todo.description}</Text>
        </Box>
        <IconButton
          onPress={deleteTask}
          ml={'auto'}
          borderRadius='sm'
          variant='solid'
          icon={<Icon as={AntDesign} name='delete' size='md' color={'black'} />}
        />
      </Flex>
    </Box>
  )
}

export const TodoItem = memo(
  TodoItemNonMemoized,
  (prevProps, nextProps) => prevProps.todo.done === nextProps.todo.done
)
