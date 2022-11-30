import { Task } from '../types/task'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useCallback, useEffect, useState } from 'react'

export const useTaskStorage = () => {
  const [savedTasks, setSavedTasks] = useState<Task[]>([])

  const getStoredTasks = useCallback(async () => {
    try {
      const tasks = await AsyncStorage.getItem('tasks')
      if (tasks !== null) {
        setSavedTasks(JSON.parse(tasks))
      } else {
        setSavedTasks([])
      }
    } catch (e) {
      console.log('Failed to get tasks from asyncStorage', e)
    }
  }, [])

  const updateStoredTasks = async (tasks: Task[]) => {
    const jsonValue = JSON.stringify(tasks)
    return await AsyncStorage.setItem('tasks', jsonValue)
  }

  useEffect(() => {
    getStoredTasks()
  }, [getStoredTasks])

  return {
    savedTasks,
    getStoredTasks,
    updateStoredTasks,
  }
}
