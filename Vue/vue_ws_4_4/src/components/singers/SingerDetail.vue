<template>
    <div class="card" >
        <h2>가수 이름</h2>
        <img src="@/assets/singer.jpg" alt="가수" style="border-radius: 200px;  height: 300px; width: 300px;">
        <p>가수 소개글</p>
    </div>
</template>

<script setup>

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
}
</style>