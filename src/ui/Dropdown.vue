<script setup lang="ts">
import { defineProps, ref } from "vue";
import { useTodoStore } from '@/stores/index'
const store = useTodoStore()

const props = defineProps<{ options: string[] }>();

const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectOption = (option: string) => {
  store.selectedOption = option;
  dropdownOpen.value = false;
};
</script>

<template>
  <div>
    <div class="relative inline-block text-left w-[125px]">
      <div>
        <span class="rounded-md shadow-sm">
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md   bg-[#6C63FF] px-4 py-2 text-sm font-medium text-white"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            @click="toggleDropdown"
          >
            {{ store.selectedOption }}
          </button>
        </span>
      </div>
      <div v-show="dropdownOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-[#6C63FF]">
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div v-for="option in props.options" :key="option" @click="selectOption(option)" class="block px-4 py-2 rounded-1 text-sm text-[#6C63FF] font-medium hover:bg-[#6C63FF] hover:text-white" role="menuitem">
            {{ option }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>