import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import type { Task } from '@/types'

export const useTodoStore = defineStore('todo', () => {
  const tasks = ref<Task[]>([])
  const search = ref('')
  const darkMode = ref<boolean>(false)
  const showModal = ref<boolean>(false)
  const task = ref<string>('')
  const edit = ref<number>()
  const selectedOption = ref<string>('Все')

  const filterBySearch = (task: Task) => {
    return task.title.toLowerCase().includes(search.value.toLowerCase())
  }

  const filterByActive = (task: Task) => {
    return task.active && !task.completed
  }

  const filterByCompleted = (task: Task) => {
    return !task.active && task.completed
  }

  const filt = computed(() => {
    if (search.value) {
      return tasks.value.filter(filterBySearch)
    } else if (selectedOption.value === 'Активные') {
      return tasks.value.filter(filterByActive)
    } else if (selectedOption.value === 'Завершенные') {
      return tasks.value.filter(filterByCompleted)
    } else {
      return tasks.value
    }
  })

  return {
    tasks,
    darkMode,
    search,
    showModal,
    task,
    edit,
    filt,
    selectedOption
  }
})
