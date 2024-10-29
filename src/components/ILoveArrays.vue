<script setup>
import { useStore } from '../stores/store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const { name } = storeToRefs(useStore())
const input = ref('')
const result = ref('')

const handleClick = () => {
  const numbers = input.value.split(',').map(Number)
  // count the occurrences of each number
  const counts = {}
  numbers.forEach(num => {
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
  result.value = uniqueCounts.map(count => `${count.number} - ${count.count}`).join(' ')
}
</script>
<template>
  <div>
    <h1>Hello {{ name }}</h1>

    <section>
      <p>
        The textbox will accept a comma delimited numbers which will be converted into an
        array. The numbers will be any number from 0 to 9 and up to 50 elements – a number
        may appear multiple times. When the user clicked the submit button, it will
        display all the unique numbers with their corresponding counts in the results
        section. Sort the result by count from highest to lowest then by number highest to
        lowest. Example input: 4, 5, 6, 7, 8, 9, 8, 4, 5, 4 Example output: (Number -
        Count) 4 - 3 8 - 2 5 - 2 9 - 1 7 - 1 6 – 1
      </p>
      <div class="flex flex-col">
        <p>(Number - Count) {{ result }}</p>
        <textarea name="textarea" id="textarea" v-model="input"></textarea>
        <button @click="handleClick">Submit</button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
