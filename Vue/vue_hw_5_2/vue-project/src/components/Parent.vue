<template>
    <div id="parent">
        <h1><strong>부모 페이지입니다.</strong></h1>
        <Child 
            :children="children"
        />
    </div>
</template>

<script setup>
import Child from '@/components/Child.vue';
import {ref} from 'vue'

const children = ref([
    {name:'김하나', age:30},
    {name:'김두리', age:20},
    {name:'김서이', age:10}
])
</script>

<style scoped>
#parent {
    border: 1px solid rgb(196, 194, 194);
}
</style>