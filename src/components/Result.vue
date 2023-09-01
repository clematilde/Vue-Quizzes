<script setup>
  import {defineProps} from "vue"
  import {RouterLink} from "vue-router"
  const {numberOfCorrectAnswers, quizQuestionLength} = defineProps (["numberOfCorrectAnswers", "quizQuestionLength"])
</script>

<template>
  <div class="results">
    <p>Your Results....</p>
    <h1> {{numberOfCorrectAnswers}}/{{quizQuestionLength}} </h1>
  </div>
  <router-link to="/">Go back</router-link>
</template>

<style scoped>

.results {
  text-align: center;
  padding: 100px 0;
}

p {
  font-size: 40px;
}

h1 {
  font-size: 80px;
}
</style>
