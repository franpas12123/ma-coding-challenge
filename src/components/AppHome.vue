<script setup>
import { computed } from 'vue'
import { useStore } from '../stores/store'
import { storeToRefs } from 'pinia'
import AppShowHide from './AppShowHide.vue'
import { NAV } from '../constants'

const { name, isDarkLightClass, navState } = storeToRefs(useStore())
const handleShowHideClick = () => {
  navState.value.home.hideSection = !navState.value.home.hideSection
}
</script>

<template>
  <section>
    <AppShowHide
      class="py-1"
      :show="navState.home.hideSection"
      @toggle="handleShowHideClick"
      :label="NAV.HOME"
    />
    <textarea
      v-if="!navState.home.hideSection"
      :class="isDarkLightClass"
      name="name"
      id="name"
      v-model="name"
      placeholder="Enter your name"
    >
    </textarea>
  </section>
</template>

<style scoped></style>
