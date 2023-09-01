<script setup>
  import {defineProps} from "vue";

  const {questionsStatus, barPercentage} = defineProps(["questionsStatus", "barPercentage"])
</script>


<template>
  <div>
    <header>
        <h4>Question {{questionsStatus}}</h4>
          <div class="bar">
            <div class="completion" :style="{width: barPercentage}"></div>
          </div>
      </header>
  </div>
</template>

<style scoped>
  header {
    margin: 60px;
  }

  header h4 {
    font-size: 30px;
  }

  .bar {
    width: 300px;
    height: 50px;
    border: 3px solid bisque
  }

  .completion {
    height: 100%;
    width: 0%;
    background-color: bisque;
  }
</style>
