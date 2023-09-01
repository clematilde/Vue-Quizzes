<script setup>
  import Question from "../components/Question.vue";
  import QuizHeader from "../components/QuizHeader.vue";
  import {useRoute} from "vue-router";
  import {ref, watch, computed} from "vue";
  import quizes from "../data/quizes.json";
  import Result from "../components/Result.vue"

  const route = useRoute()

  const quizId = parseInt(route.params.id)

  const currentQuestionIndex = ref(0)

  const quiz = quizes.find(q => q.id === quizId)

  const numberOfCorrectAnswers = ref(0)

  const onOptionSelected = (isCorrect) => {
    // console.log("EMITED EVENT", isCorrect)
    if(isCorrect) {
      numberOfCorrectAnswers.value++
    }
    currentQuestionIndex.value++

    if(quiz.questions.length -1 === currentQuestionIndex.value -1){
      showResults.value = true
    }
  }

  const showResults = ref(false)

  // const questionsStatus = ref(`${currentQuestionIndex.value} / ${quiz.questions.length}`)

  // watch(() => currentQuestionIndex.value, () => {
  //   questionsStatus.value = `${currentQuestionIndex.value} / ${quiz.questions.length}`
  // })

  const questionsStatus = computed(() => {
    return `${currentQuestionIndex.value} / ${quiz.questions.length}`
  })

  const barPercentage = computed(() => {
     return`${currentQuestionIndex.value / quiz.questions.length * 100}%`})

</script>


<template>
    <QuizHeader
      :questionsStatus="questionsStatus"
      :barPercentage="barPercentage"
    />
  <div>
    <Question
      v-if="!showResults"
      :question="quiz.questions[currentQuestionIndex]"
      @selectOption="onOptionSelected"
      />


  <Result
    v-else
    :quizQuestionLength = "quiz.questions.length"
    :numberOfCorrectAnswers = "numberOfCorrectAnswers" />
</div>

</template>
