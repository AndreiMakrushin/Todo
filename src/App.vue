<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useTodoStore } from './stores/index'
const store = useTodoStore()
</script>

<template>
  <div class="w-[100%]" :class="store.darkMode ? 'dark' : 'light'">
    <div class="dark:bg-[#252525] h-[100vh]">
      <header class="w-full bg-[#6C63FF] text-white justify-center items-center text-[20px]">
      <nav class="gap-2 justify-center items-center flex">
        <RouterLink to="/" activeClass="active">Home</RouterLink>
        <RouterLink to="/todo" activeClass="active">Task manager</RouterLink>
      </nav>
    </header>
    <RouterView />
    </div>
  </div>
</template>

<style scoped>
.active {
  color: #9b96ff;
}
</style>
