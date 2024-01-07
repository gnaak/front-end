<template>
    <div id="parent">
        <h1><strong>부모 페이지입니다.</strong></h1>
        <Child 
            :children="children"
            @giveMeAllowanceEvent="updateBalance"
        />
    </div>
</template>


<script setup>
import Child from '@/components/ChildPage.vue';
import {ref} from 'vue'

const children = ref([
    {name:'김하나', age:30, balance:100000},
    {name:'김두리', age:20, balance:10000},
    {name:'김서이', age:10, balance:1000}
])

const updateBalance = (index) => {
    children.value[index].balance += 1000;
  }


</script>

<style scoped>
#parent {
    border: 1px solid rgb(196, 194, 194);
}
</style>