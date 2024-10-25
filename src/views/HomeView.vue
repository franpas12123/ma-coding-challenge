<script setup>
import AppHome from '../components/AppHome.vue'
import ILoveArrays from '../components/ILoveArrays.vue'
import RestAPI from '../components/RestAPI.vue'
import { useStore } from '../stores/store'
import { storeToRefs } from 'pinia'

const { name } = storeToRefs(useStore())
</script>

<template>
  <div>
    <AppHome />
    <ILoveArrays v-if="name.length" />
    <RestAPI v-if="name.length" />
  </div>
</template>

<style lang="scss" scoped></style>
