<script setup>
  import { defineProps, defineEmits } from 'vue';

  const {question} = defineProps(['question'])

  const emit = defineEmits(["selectOption"])

  const emitSelectedOption = (isCorrect) => {
    emit("selectOption", isCorrect)
  }
</script>


<template>
  <div class="question-container">
    <h1 class="question">
      {{ question.text }}
    </h1>
  </div>
  <div class="answers-container">
    <div
      v-for="option in question.options"
      :key="option.id"
      class="option"
      @click="emitSelectedOption(option.isCorrect)"
      >
        <p class="option-label">{{option.label}}</p>
        <div class="option-value">
          <p>{{option.text}}</p>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .question-container {
    margin-top: 40px;
    margin-left: 40px;
  }

  .answers-container {
    margin: 40px;
  }

  .question {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .option-label {
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .option-value {
    background-color: whitesmoke;
    width: 100%;
    font-size: 30px;
    padding: 0 200px;
  }

</style>
