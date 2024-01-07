<template>
    <h1 style="text-align: center;">가수 목록</h1>
    <div class="container hs" >
      
        <SingerDetail v-for="singerItem in singers" :key="singerItem.name"/>
          
      
    </div>
  </template>
  
  <script setup>
  import SingerDetail from '@/components/singers/SingerDetail.vue';
  const singers = [
    { name: 'Adele' },
    { name: 'Maroon 5' },
    { name: 'Dua Lipa' }
  ];
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
  .hs {
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    /* align-items: center; */
  }
  h1 {
    color: red;
  }
  </style>
  