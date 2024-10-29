<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from '../stores/store'
import { storeToRefs } from 'pinia'
import AppShowHide from './AppShowHide.vue'
import { NAV } from '../constants'

const { name, btnClass, navState } = storeToRefs(useStore())

// fetch 6 images from the API: https://dog.ceo/api/breeds/image/random
const fetchImages = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch images')
    }
    return data.message
  } catch (error) {
    console.error(error)
  }
}

const images = ref([])
const refreshImages = async () => {
  showSection.value = false
  images.value.length = 0
  for (let i = 0; i < 6; i++) {
    const img = await fetchImages()
    if (!images.value.includes(img)) {
      images.value.push(img)
    } else {
      i--
    }
  }
  showSection.value = true
  console.log(images)
}

const showSection = ref(false)

onMounted(() => {
  refreshImages()
})

const handleShowHideClick = () => {
  navState.value.restapi.hideSection =!navState.value.restapi.hideSection
}
</script>

<template>
  <AppShowHide
    class="mt-5 py-1"
    :show="navState.restapi.hideSection"
    @toggle="handleShowHideClick"
    :label="NAV.RESTAPI"
  />

  <!-- 2x3 grid layout -->
  <section class="" v-if="!navState.restapi.hideSection">
    <h1 class="text-2xl font-bold">
      Hello, {{ name }}
      <span v-if="!images.length">Loading...</span>
    </h1>
    <Suspense>
      <div class="grid grid-cols-2 gap-4 mt-3" v-if="images.length">
        <div v-for="img in images" :key="img">
          <img :src="img" alt="dog" class="h-64 rounded-xl mx-auto" />
        </div>
      </div>
      <template #fallback> Loading... </template>
    </Suspense>
    <div class="flex flex-col my-6">
      <button
        :class="btnClass"
        @click="refreshImages"
      >
        Refresh
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
