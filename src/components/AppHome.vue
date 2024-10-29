<script setup>
import { useStore } from '../stores/store'
import { storeToRefs } from 'pinia'

const { name, textareaClass, btnClass } = storeToRefs(useStore())
</script>

<template>
  <div>
    <h1 class="font-bold text-3xl py-2">
      {{ name }}
    </h1>

    <textarea :class="textareaClass" name="name" id="name" v-model="name" placeholder="Enter your name"> </textarea>
    <button :class="btnClass">Submit</button>
  </div>
</template>

<style scoped></style>
