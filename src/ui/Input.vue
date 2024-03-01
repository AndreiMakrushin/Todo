<script setup lang="ts">
defineProps<{
  task: string
}>()
</script>

<template>
    <input
      :value="task"
          type="text"
          @input="$emit('update:modelValue', ($event.currentTarget as HTMLInputElement).value.trim())"
          class="mt-[20px] w-[100%] p-[8px] dark:bg-[#252525] dark:text-white dark:border-white outline-none border-[1px] border-[#6C63FF] rounded-[5px] flex grow text-[#6C63FF] font-medium"
        />
</template>
