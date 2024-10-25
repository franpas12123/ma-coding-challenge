<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from '../stores/store'
import { storeToRefs } from 'pinia'

const { name } = storeToRefs(useStore())

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
</script>

<template>
  <div>
    <h1>Hello {{ name }}</h1>

    <!-- 2x3 grid layout -->
    <section class="">
      <h1 class="" v-if="!images.length">Loading</h1>
      <Suspense>
        <div class="grid grid-cols-2 gap-4" v-if="images.length">
          <div v-for="img in images" :key="img">
            <img :src="img" alt="dog" class="h-64 rounded-xl" />
          </div>
        </div>
        <template #fallback> Loading... </template>
      </Suspense>
      <button @click="refreshImages" class="p-3 m-3 rounded-xl bg-slate-500">Refresh</button>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
