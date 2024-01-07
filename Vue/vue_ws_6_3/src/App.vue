<template>
  <div>
  <!-- <div class="mz"> -->
    <div class="container">
      <!-- <div class="sm"> -->
        <div class="h3">
          <h3>Quiz 퀴즈</h3>
          <!-- Quiz 퀴즈 -->
        </div>
        <div class="h4">
            <p>
              여기는 퀴즈의 나라! 놀라운 퀴즈들이 기다리고 있어요. 지금 바로 도전해보세요!
            </p>
              
          <!-- <h4>여기는 퀴즈의 나라! 놀라운 퀴즈들이 기다리고 있어요. 지금 바로 도전해보세요!</h4> -->
        </div>
      <!-- </div> -->
      <br><br>
        <nav class="box">
          <RouterLink :to="{ name : 'home' }">Home</RouterLink> |
          <RouterLink :to="{ name : 'quiz' }">Quiz</RouterLink> |
        </nav>
      </div>

      <RouterView />
  </div>

</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
import HomeView from '@/views/HomeView.vue';
</script>

<style scoped>
.mz {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.sm{
  /* border: 1px solid lightslategray; */
  width: 95%;
  height: 70%;
  margin-top: 20px;
  border-radius: 10px;
}
.container {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  background-color: lightgray;
  width: 60%;
  height: 250px;
  margin: 0 auto;
  
}
.h3{
  background-color: orange;
  width: 95%;
  height: 30%;
  color: white;
  margin-top: 20px;
  font-size: 30px;  
  font-weight: 700;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  }
.h4 {
  background-color: white;
  /* margin: 0px; */
  height: 60%;
  width: 95%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  /* align-items: center;
  justify-items: center; */
  text-align: center;
}

.box {
  display: inline-block;;
  width: 95%;
  background-color: gray;
  color: white;
  text-align: center;
  margin-bottom: 10px;
  height: 35px;
  
}
h3{
  margin: 0px;
}
</style>