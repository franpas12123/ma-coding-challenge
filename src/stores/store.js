// create a basic pinia store
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { NAV } from '../constants'

export const useStore = defineStore('store', () => {
  const name = ref('')

  // toogle light and dark mode
  const isDarkMode = ref(false)
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
  }
  const isDarkLightClass = computed(() => {
    return `${isDarkMode.value ? 'dark' : 'light'}`
  })

  const navState = ref({
    home: {
      name: NAV.HOME,
      isDone: false,
      hideSection: false
    },
    iloveArrays: {
      name: NAV.ILOVEARRAYS,
      isDone: false,
      hideSection: false
    },
    restapi: {
      name: NAV.RESTAPI,
      isDone: false,
      hideSection: true
    }
  })

  const isIloveArraysDone = computed(() => {
    return navState.value.iloveArrays.isDone
  })

  return { name, isDarkMode, toggleDarkMode, isDarkLightClass, navState, isIloveArraysDone }
})
