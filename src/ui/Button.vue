<script setup lang="ts">

defineProps<{
    text: string
}>()

</script>

<template>
  <button class="px-[22px] py-[10px] bg-[#6C63FF] text-white rounded-[5px] font-medium text-[15px]">
    {{ text }}
  </button>
</template>
