<template>
    <div>
        <p class="container">
            <CreateCardForm
            @createCardEvent="createCard"/>
            <p v-if="cards.length>0">보유중인 명함 수 : {{ cards.length }}</p>
            <p v-else>보유중인 명함이 없습니다. 새로운 명함을 추가해주세요.</p>
        </p>
        <businessCardDetail 
        :cards="cards"
        @deleteCardEvent="deleteCard"
        />
    </div>
</template>

<script setup>
import businessCardDetail from '@/components/businessCardDetail.vue';
import {ref} from 'vue'
import CreateCardForm from '@/components/CreateCardForm.vue';

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

const createCard = (businessCard) => {
    // 명함을 생성하고 저장하는 로직을 추가해야 합니다
    cards.value.push(businessCard);
}

</script>

<style scoped>
.container {
    justify-content: center;
    justify-items: center;
    text-align: center;
}
</style>