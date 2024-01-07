<template>
    <div>
        <input ref="input">
    </div>
</template>

<script setup>
import {ref} from 'vue'

// 변수명은 템플릿 ref 값과 일치해야 함 
const input = ref(null)

onMounted(() => {
    console.log(input.value) // <input>
})
</script>

<style scoped>

</style>