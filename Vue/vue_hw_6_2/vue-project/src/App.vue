<template>
  <header>
    <MainPage/>
    <nav>
      <RouterLink :to="{name:'some'}">Some</RouterLink> |
      <RouterLink :to="{name:'other'}">Other</RouterLink>
    </nav>
  </header>

  <RouterView/>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
</script>

<style scoped>

</style>