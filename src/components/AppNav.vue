<script setup>
import { useStore } from '../stores/store'
import { storeToRefs } from 'pinia'
import { NAV } from '../constants'
import AppShowHide from './AppShowHide.vue'

const { name, isIloveArraysDone, navState } = storeToRefs(useStore())

const handleShowHideClick = (hideSection) => {
  navState.value[hideSection].hideSection = !navState.value[hideSection].hideSection
}
</script>
<template>
  <nav class="min-w-32 pl-3">
    <ul class="flex flex-col">
      <li>
        <p>{{ NAV.HOME }}</p>
      </li>
      <li v-if="name.length">
        <AppShowHide
          class="py-1"
          :show="navState.iloveArrays.hideSection"
          @toggle="handleShowHideClick('iloveArrays')"
          :label="NAV.ILOVEARRAYS"
        />
      </li>
      <li v-if="name.length && isIloveArraysDone">
        <AppShowHide
          class="py-1"
          :show="navState.restapi.hideSection"
          @toggle="handleShowHideClick('restapi')"
          :label="NAV.RESTAPI"
        />
      </li>
    </ul>
  </nav>
</template>
<style lang="scss" scoped></style>
