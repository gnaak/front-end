<template>
  <div class="card">
    <div >
      <h2>가수 이름</h2>
      <img src="@/assets/singer.jpg" alt="가수" style="border-radius: 200px; height: 300px; width: 300px;">
      <p>가수 소개글</p>
      <SingerAlbum />
      <SingerAlbum />
    </div>
  </div>
</template>

<script setup>
import SingerAlbum from '@/components/singers/SingerAlbum.vue';
</script>

<style scoped>
.card {
  border: 1px solid black;
  display: inline-block; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;  
  text-align: center;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px grey;
}

</style>
