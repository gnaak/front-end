<template>
    <div>
        <form @submit.prevent="createTodo()">
            <input type="text" v-model="todoText">
            <input type="submit">
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { useCounterStore } from '../stores/counter';
const todoText = ref('')

const store = useCounterStore()
const createTodo = function(){
    store.addTodo(todoText.value)
    todoText.value = ''
}
</script>

<style scoped>

</style>