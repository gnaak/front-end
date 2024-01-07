<template>
    <div class="greeting">{{ msg }} </div>
    <div>
        <h2>MyComponent</h2>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const msg = ref('Hello World')
</script>

<style scoped>
.greeting {
    color: red;
}
</style>