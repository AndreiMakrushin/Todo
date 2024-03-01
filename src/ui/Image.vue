
<script setup lang="ts">
defineProps<{
    image: string
}>()
</script>

<template>
    <img
        :src="image"
        alt=""
        class="w-[21px] h-[21px] cursor-pointer"
      />
</template>