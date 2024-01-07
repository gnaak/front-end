<template>
    <div class="container">
        <h1>가수 목록</h1>
    </div>
<SingerDetail />
<SingerDetail />
</template>

<script setup>
import SingerDetail from '@/components/singers/SingerDetail.vue';
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1 {
    color: red;
}
</style>