<template>
    <div class="container">
        <div v-for="(quiz,index) in quizs" :key="index" class="cards">
            
            <p><strong>{{quiz.pk}}번 문제. {{ quiz.question }}</strong></p>
        
            <p>정답 입력</p>
            <input type="text" class="input">
            
        </div>
    </div>
</template>

<script setup>
const quizsDetail = defineProps({
    quizs : Object
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  background-color: white;
  width: 70%;
  height: 550px;
  margin: 10px auto;
  margin-bottom: 20px;
}
.cards{
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgb(236, 234, 234);
    border: 1px lightgray solid;
    margin: 20px;
    text-align: left;
    justify-items: center; 
    height: 300px;
    padding: 10px;
    border-radius: 5px;
}

.input{
    height: 30px;

}
</style>