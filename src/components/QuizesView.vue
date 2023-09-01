<script setup>
  import q from "../data/quizes.json"
  import {ref, watch} from "vue"
// import component Card. Start with Capital Letter
  import Card from "../components/Card.vue"
  // Need to install Vue-Router with npm


// quizes = json q
  const quizes = ref(q)
  const search = ref("")

  // We have to listen to search and run the logic if the state change. We can do that we "watch"
  // First parameter "Search" that we want to listen to, second is the callback function to execute everytime the state of search change.
  // Q.filter: iterate over every quiz and only keep the quizes that have names that include whats inside the search.
  watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })

</script>


<template>
<div>

  <header>
    <h1>Quizes</h1>
    <!-- Everyrime we deal with input or texts, we need a two ways binding / here with const search-->
    <input v-model.trim="search" type="text" placeholder="Search...">
  </header>
  <div class="options-container">
    <!-- Treat i like an html ctag and iterate over it.-->
    <!-- :quiz="quiz" is a prop. We need it to pass the information from the parent App to the children. :quiz could be anything
    , like :img = "quiz.img" if we only want to pass the image. Here we send everything from quiz-->
    <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
  </div>
</div>
</template>

<style scoped>


header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
  color:darkslateblue;
}

header input {
  border: none;
  background-color:rgba(234, 173, 93, 0.146);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
</style>
