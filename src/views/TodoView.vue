<script setup lang="ts">
import { useTodoStore } from '../stores/index'
import { onMounted } from 'vue'
import type { Task } from '../types'
import Header from '@/components/Header.vue'
import TodoList from '@/components/TodoList.vue'
import Modal from '@/components/Modal.vue'

const store = useTodoStore()

const deleteTask = (id: number) => {
  const index = store.tasks.findIndex((item: any) => item.id === id)
  if (index !== -1) {
    store.tasks.splice(index, 1)
  }
  localStorage.setItem('tasks', JSON.stringify(store.tasks))
}

onMounted(() => {
  store.tasks = JSON.parse(localStorage.getItem('tasks') || '[]')
})
const editing = (task: Task) => {
  store.showModal = true
  store.edit = task.id
  store.task = task.title
}
const selectTask = (task: Task) => {
  task.completed ? (task.active = false) : (task.active = true)
  localStorage.setItem('tasks', JSON.stringify(store.tasks))
}

const completeTask = (task: Task) => {
  task.completed = true
  task.active = false
  localStorage.setItem('tasks', JSON.stringify(store.tasks))
}
</script>
<template>
    <div
      class="dark:bg-[#252525] items-center  flex flex-col pt-[50px] p-[20px]"
    >
      <div class="flex flex-col items-center sm:w-full md:w-[700px] p-[5px]">
        <Header />
        <div class="flex flex-col items-center mt-10" v-if="!store.tasks.length">
          <img src="../assets/icons/notfound.png" alt="" />
          <h1 class="font-medium text-[20px] dark:text-white">Пустой список...</h1>
        </div>

        <transition-group
          name="fade"
          tag="div"
          v-else
          class="w-[70%] mt-[30px] flex gap-3 flex-col  min-w-[300px]"
        >
          <TodoList
            v-for="task in store.filt"
            :task="task"
            :key="task.id"
            class="w-full"
            @delete="deleteTask"
            @edit="editing"
            @select="selectTask"
            @complete="completeTask"
          />
        </transition-group>
      </div>

      <Modal v-show="store.showModal" />

      <img
        src="../assets/icons/Addbutton.png"
        alt=""
        class="w-[50px] h-[50px] cursor-pointer mt-[30px]"
        @click="store.showModal = true"
      />
    </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #a0aec0;
  border-radius: 2.5px;
}
</style>
