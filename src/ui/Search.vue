<script setup lang="ts">

defineProps<{
  text: string
}>()

</script>

<template>
  <div
    class="w-full rounded-[5px] flex flex-row border-[2px] dark:border-white border-[#6C63FF] m-1 px-[8px] py-[6px] dark:text-white items-center text-[#6C63FF] font-medium"
  >
    <input
      :value="text"
      type="text"
      class="pl-3 outline-none grow dark:bg-[#252525]"
      placeholder="search..."
      @input="$emit('update:modelValue', ($event.currentTarget as HTMLInputElement).value.trim())"
    />
    <img src="../assets/icons/search.png" alt="" class="w-[21px] h-[21px] cursor-pointer" />
  </div>
</template>
