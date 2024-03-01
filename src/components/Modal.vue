<script setup lang="ts">
import { useTodoStore } from '@/stores'
import Input from '@/ui/Input.vue'
import Button from '@/ui/Button.vue'
import type { Task } from '@/types'

const store = useTodoStore()

const updateTask = (existing: Task) => {
  existing.title = store.task
  store.edit = 0
  store.task = ''
  store.showModal = false
  localStorage.setItem('tasks', JSON.stringify(store.tasks))
}

const addTask = () => {
  const existing: Task | undefined = store.tasks.find((item: Task) => item.id === store.edit)
  if (!store.task) {
    return
  }
  if (existing) {
    updateTask(existing)
    return
  }
  store.tasks.push({
    id: Math.floor(Math.random() * 100000000),
    title: store.task,
    active: false,
    completed: false
  })
  store.task = ''
  store.showModal = false
  localStorage.setItem('tasks', JSON.stringify(store.tasks))
}

const cancel = () => {
  store.showModal = false
  store.edit = 0
  store.task = ''
}

</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] justify-center items-center flex"
  >
    <div
      class="w-[500px] h-[289px] dark:bg-[#252525] dark:border-[1px] bg-white border-[2px]  dark:border-white rounded-[16px] justify-between items-center flex flex-col py-[15px] px-[30px]"
    >
      <div class="items-center flex flex-col w-full">
        <span class="font-bold text-[24px] text-black dark:text-white">Новая Задача</span>
        <Input v-model="store.task" placeholder="Название задачи" :task="store.task" />
      </div>

      <div class="justify-between w-full flex">
        <button
          @click="cancel"
          class="px-[22px] py-[10px] dark:bg-[#252525] bg-white text-[#6C63FF] rounded-[5px] border-[1px] border-[#6C63FF] font-medium text-[18px]"
        >
          Отменить
        </button>
        <Button :text="store.edit ? 'Обновить' : 'Добавить'" @click="addTask" />
      </div>
    </div>
  </div>
</template>
