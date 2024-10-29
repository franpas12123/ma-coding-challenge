// create a basic pinia store
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStore = defineStore('store', () => {
  const name = ref('')

  // toogle light and dark mode
  const isDarkMode = ref(false)
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
  }
  const textareaClass = computed(() => {
    return isDarkMode.value ? 'textarea-dark' : 'textarea-light'
  })
  const btnClass = computed(() => {
    return isDarkMode.value ? 'btn-dark' : 'btn-light'
  })

  return { name, isDarkMode, toggleDarkMode, textareaClass, btnClass }
})
