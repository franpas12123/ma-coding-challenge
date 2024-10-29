<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useStore } from './stores/store'
import { storeToRefs } from 'pinia'
import AppHome from './components/AppHome.vue'
import AppNav from './components/AppNav.vue'

const myVar = 'My Vue App'

const { toggleDarkMode } = useStore()
const { name, isDarkMode, btnClass } = storeToRefs(useStore())
</script>

<template>
  <div
    :class="{ 'dark-mode': isDarkMode, 'light-mode': !isDarkMode }"
    class="h-screen pt-5"
  >
    <button class="absolute right-2 p-2" :class="btnClass" @click="toggleDarkMode">
      <span v-if="isDarkMode">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      </span>
      <span v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      </span>
    </button>

    <h1 class="text-4xl font-bold underline text-center">{{ myVar }}</h1>

    <div class="flex mt-8 h-full">
      <AppNav />
      <div class="flex flex-col pr-4 pl-2">
        <h1 v-if="name.length" class="font-bold text-3xl py-2">
          Hello, {{ name }}
        </h1>

        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.light-mode {
  background-color: rgb(230, 230, 230);
  color: rgb(38, 38, 38);
}

.dark-mode {
  background-color: rgb(32, 32, 32);
  color: rgb(240, 240, 240);
}
</style>
