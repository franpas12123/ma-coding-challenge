<script setup>
import { useStore } from '../stores/store'
import { storeToRefs } from 'pinia'

const { name } = storeToRefs(useStore())
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
      <div class="flex">
        <textarea name="textarea" id="textarea"></textarea>
        <button>Submit</button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
