<script setup>
import { useStore } from '../stores/store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { NAV } from '../constants'
import AppShowHide from './AppShowHide.vue'

const { name, isDarkLightClass, navState } = storeToRefs(useStore())
const input = ref('')
const result = ref('')
const errorMsg = ref('')

const handleClick = () => {
  const inputs = input.value.split(',').map((num) => num.trim()).filter((num) => num !== '')
  if (inputs.length > 50) {
    errorMsg.value = 'You can only enter up to 50 numbers.'
    return
  }
  if (inputs.some((num) => isNaN(Number(num)))) {
    errorMsg.value = 'Please enter only numbers.'
    return
  }
  if (inputs.some((num) => Number(num) < 0 || Number(num) > 9)) {
    errorMsg.value = 'Numbers should be 0 to 9.'
    return
  }
  const numbers = inputs.map((num) => Number(num))
  // count the occurrences of each number
  const counts = {}
  numbers.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1
  })
  // convert the counts object into an array of objects with number and count properties
  const uniqueCounts = Object.entries(counts).map(([num, count]) => ({
    number: Number(num),
    count
  }))
  // sort the array by count and then by number
  uniqueCounts.sort((a, b) => {
    if (a.count === b.count) {
      return b.number - a.number
    }
    return b.count - a.count
  })
  // format the result string
  result.value = uniqueCounts.map((count) => `${count.number} - ${count.count}`).join(' ')

  navState.value.restapi.hideSection = false
  navState.value.iloveArrays.isDone = true
}

const handleShowHideClick = () => {
  navState.value.iloveArrays.hideSection = !navState.value.iloveArrays.hideSection
}
</script>
<template>
  <AppShowHide class="mt-5 py-1" :show="navState.iloveArrays.hideSection" @toggle="handleShowHideClick" :label="NAV.ILOVEARRAYS" />
  <section v-if="!navState.iloveArrays.hideSection">
    <h1 class="text-2xl font-bold">Hello, {{ name }}</h1>
    <p>
      The textbox will accept a comma delimited numbers which will be converted into an
      array. The numbers will be any number from 0 to 9 and up to 50 elements – a number
      may appear multiple times. When the user clicked the submit button, it will display
      all the unique numbers with their corresponding counts in the results section. Sort
      the result by count from highest to lowest then by number highest to lowest. Example
      input: 4, 5, 6, 7, 8, 9, 8, 4, 5, 4 Example output: (Number - Count) 4 - 3 8 - 2 5 -
      2 9 - 1 7 - 1 6 – 1
    </p>
    <div class="flex flex-col">
      <p v-if="result.length" class="mt-2 font-bold">
        (Number - Count) <span class="text-green-500">{{ result }}</span>
      </p>
      <p v-if="errorMsg.length" class="text-red-500 font-medium">{{ errorMsg }}</p>
      <textarea
        :class="isDarkLightClass"
        class="mt-2"
        name="textarea"
        id="textarea"
        v-model="input"
        @change="errorMsg = ''"
        @input="errorMsg = ''"
      />

      <button :class="isDarkLightClass" class="mt-3" @click="handleClick">Submit</button>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
