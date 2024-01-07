<template>
    <div>
        <businessCardDetail 
        :cards="cards"
        @deleteCardEvent="deleteCard"
        />
    </div>
</template>

<script setup>
import businessCardDetail from '@/components/businessCardDetail.vue';
import {ref} from 'vue'

const cards = ref([
    {name : '일론 머스크', title : '테슬라 테크노킹'},
    {name : '래리 엘리슨', title : '오라클 창업주'},
    {name : '빌 게이츠', title : '마이크로소프트 공동창업주'},
    {name : '래리 페이지', title : '구글 공동창업주'},
    {name : '세르게이 브린', title : '구글 공동창업주'},
])

const deleteCard = (index) => {
    // 전달받은 인덱스를 사용하여 명함 삭제
    cards.value.splice(index, 1);
}
</script>

<style scoped>

</style>