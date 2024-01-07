<template>
    <div class="container">
        <div v-for="card in cards" class="cards">
            <p><strong> 이름 : {{ card.name }}</strong></p>
            <p> 직함 : {{ card.title }}</p>
        </div>

    </div>
</template>

<script setup>
const cardsDetail = defineProps({
    cards : Object
})
</script>

<style scoped>
.container{
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cards{
    display: flex;
    flex-direction: column;
    width: 40%;
    background-color: rgb(236, 234, 234);
    border: 1px lightgray solid;
    margin: 20px;
    text-align: center;
    
}
</style>