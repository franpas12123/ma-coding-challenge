<script setup>
import { useStore } from '../stores/store'
import { storeToRefs } from 'pinia'

const { name } = storeToRefs(useStore())
</script>

<template>
  <div>
    <h1>
      {{ name }}
    </h1>
    <textarea name="name" id="name" v-model="name"> </textarea>
  </div>
</template>

<style scoped></style>
