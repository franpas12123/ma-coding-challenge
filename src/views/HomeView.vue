<script setup>
import AppHome from '../components/AppHome.vue'
import ILoveArrays from '../components/ILoveArrays.vue'
import RestAPI from '../components/RestAPI.vue'
import { useStore } from '../stores/store'
import { storeToRefs } from 'pinia'

const { name, isIloveArrayDone } = storeToRefs(useStore())
</script>

<template>
  <div>
    <AppHome />
    <ILoveArrays v-if="name.length" class="mt-5" />
    <RestAPI v-if="name.length && isIloveArrayDone" class="mt-5" />
  </div>
</template>

<style lang="scss" scoped></style>
