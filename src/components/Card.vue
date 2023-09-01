<script setup>
import {defineProps} from "vue"
import {useRouter} from "vue-router"

const router = useRouter()
const {quiz} = defineProps(['quiz'])

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`)
}
</script>


<template>
  <div class="card" @click="navigateToQuiz">
    <!-- Now we can use the data inside Card -->
    <img :src="quiz.img" alt="">
    <div class="card-text">
      <h2>{{quiz.name}}</h2>
      <p> {{quiz.questions.length}} Questions</p>
    </div>
  </div>
</template>

<style scoped>

.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.10);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
  padding: 10px;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card .card-text {
  padding: 0 5px;
}

.card .card-text h2 {
  font-weight: bold;
}

</style>
