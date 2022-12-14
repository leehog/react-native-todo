import { Task } from '../../types/task'
import { AntDesign } from '@expo/vector-icons'
import {
  Text,
  Box,
  Flex,
  Checkbox,
  IconButton,
  Icon,
  PresenceTransition,
} from 'native-base'
import { memo } from 'react'

interface Props {
  task: Task
  deleteTask: () => void
  finishTask: () => void
}

export const TaskItemNonMemoized = ({
  task,
  deleteTask,
  finishTask,
}: Props) => {
  return (
    <Box w='100%'>
      <PresenceTransition
        visible={!!task}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 250,
          },
        }}
      >
        <Box
          key={task.id}
          bg='emerald.300'
          rounded='md'
          shadow={3}
          py={2}
          px={4}
        >
          <Flex direction={'row'}>
            <Checkbox
              mt={2}
              value={task.done ? 'checked' : ''}
              onChange={finishTask}
              isChecked={task.done}
              colorScheme='green'
              accessibilityLabel={'Finish task'}
            />
            <Box ml={4} opacity={task.done ? 0.4 : 1}>
              <Text fontSize={'xl'} strikeThrough={task.done}>
                {task.title}
              </Text>
              <Text strikeThrough={task.done}>{task.description}</Text>
            </Box>
            <Box ml={'auto'}>
              <IconButton
                onPress={deleteTask}
                borderRadius='sm'
                variant='solid'
                icon={
                  <Icon
                    as={AntDesign}
                    name='delete'
                    size='md'
                    color={'black'}
                  />
                }
              />
            </Box>
          </Flex>
        </Box>
      </PresenceTransition>
    </Box>
  )
}

export const TaskItem = memo(
  TaskItemNonMemoized,
  (prevProps, nextProps) => prevProps.task.done === nextProps.task.done
)
