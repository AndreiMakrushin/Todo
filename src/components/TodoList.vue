<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { Task } from '@/types'
import Image from '@/ui/Image.vue'
import Edit from '@/assets/icons/edit.png'
import Delete from '@/assets/icons/delete.png'


const props = defineProps<{
  task: Task
}>()

const statusTask = (task: Task) => {
  return task.active ? 'активно' : task.completed ? 'завершено' : 'не активно'
}

const bgStyle = computed(() => {
  return props.task.active ? 'bg-[#eeffea]' : props.task.completed ? 'bg-[#ffe4e4]' : 'bg-white dark:bg-[#252525]'
})
</script>

<template>
  <div
    class="flex justify-between items-center gap-5 border-b-2 border-[#6C63FF] py-[15px] px-[5px] rounded-[5px]"
    :class="bgStyle"
  >
    <div
      class="flex flex-row items-center cursor-pointer justify-between grow"
      @click="$emit('select', task)"
    >
      <div @click="$emit('complete', task)" class="flex items-center gap-2">
        <input
          :disabled="task.completed"
          class="w-[26px] h-[26px] cursor-pointer"
          type="checkbox"
          :checked="task.completed"
        />
        <span
          :class="task.completed ? 'line-through text-gray-400' : 'text-[#6C63FF]'"
          class="text-[20px] font-medium max-w-[300px]"
          >{{ task.title }}</span
        >
      </div>
      <span
        :class="{
          'text-[#57fa48]': task.active && !task.completed,
          'text-gray-400': !task.active
        }"
      >
        {{ statusTask(task) }}
      </span>
    </div>
    <div class="flex flex-row gap-2">
      <Image :image="Edit" @click="$emit('edit', task)"/>
      <Image :image="Delete" @click="$emit('delete', task.id)"/>
    </div>
  </div>
</template>
