<script setup lang="ts">
import { useTodoStore } from '@/stores/index'
import Switch from '@/ui/Switch.vue'
import Dropdown from '@/ui/Dropdown.vue'
import Search from '@/ui/Search.vue';

const store = useTodoStore()

const toggle = () => {
  store.darkMode = !store.darkMode
}
</script>

<template>
  <div class="flex flex-col items-center w-full">
    <h1 class="text-[26px] font-medium text-black dark:text-white">todo list</h1>
    <div class="flex flex-row w-full  items-center gap-2 mt-[20px] flex-wrap justify-end">
      <Search v-model="store.search" :text="store.search"/>
      <Dropdown :options="['Все', 'Активные', 'Завершенные']" />
      <Switch @mode="toggle" />
    </div>
  </div>
</template>
