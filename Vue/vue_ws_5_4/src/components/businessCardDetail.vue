<template>
    <div class="container">
        <div v-for="(card,index) in cards" class="cards" :key="index">
            <p><strong> 이름 : {{ card.name }}</strong></p>
            <p> 직함 : {{ card.title }}</p>
            <br>
            <button class="button" @click="$emit('deleteCardEvent')">명함 삭제</button>
            <br>
        </div>

    </div>
</template>

<script setup>
const cardsDetail = defineProps({
    cards : Object
})

const emit = defineEmits(['deleteCardEvent'])

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
    justify-items: center;
    align-items: center;
}
.button{
    width: 20%;
}
</style>