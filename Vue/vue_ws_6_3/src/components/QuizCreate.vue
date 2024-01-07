<template>
    <div class="container">
        <div  class="cardss">
        <form action="submit" @submit.prevent="createQuizFunc">
                <h4>퀴즈 생성</h4>
                <p>문제</p>
                <textarea name="quizcreate" id="input" cols="30" rows="10" v-model="question"></textarea>
                <p>답안</p>
                <input type="text" class="input" v-model="answer"><br><br>
                <button @click="$emit('createQuizEvent',{pk, question, anwer})" class="btn">퀴즈 생성</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'


const question = ref('')
const answer = ref('')
const pk = ref(6)

const emit = defineEmits(['createQuizEvent'])

const createQuizFunc = () => {
    const quizinfo = {
        pk:pk.value,
        question: question.value,
        answer: answer.value
    }
    pk.value+=1
    question.value=''
    answer.value=''
}


</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* justify-content: center; */
  justify-items: center;
  

}
.cardss{
    display: flex;
    flex-direction: column;
    width: 60%;
    background-color: rgb(236, 234, 234);
    border: 1px lightgray solid;
    margin: 20px;
    text-align: left;
    /* align-items: center; */
    /* justify-content: center;  */
    height: 400px;
    padding: 10px;
    border-radius: 5px;
}
#input{
    width: 98.5%;
    border-radius: 5px;
}
.input{
    width: 98.5%;
    border-radius: 5px;
}
.btn{
    width: 100%;
    height: 40px;
    background-color: blue;
    color:white;
    font-weight: 700;
    border-radius: 5px;
}
</style>