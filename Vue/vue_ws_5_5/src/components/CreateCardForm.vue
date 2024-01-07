<template>
    <div>
        <form @submit.prevent="createCardFunc" class="form">
            이름 : <input type="text" v-model="name">
            직함 : <input type="text" v-model="title">
            <button class="button" type="submit" @click="$emit('createCardEvent', {name, title})">명함 추가</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const title = ref('');

const emit = defineEmits(['createCardEvent'])

const createCardFunc = () => {
  // 명함을 생성하고 저장하는 로직을 추가할 수 있습니다
  const cardinfo = {
    name: name.value,
    title: title.value,
  };
  // 생성한 명함을 어딘가에 저장하거나 활용할 수 있습니다

  // 입력 필드 초기화
  name.value = '';
  title.value = '';
};
</script>

<style scoped>
.button {
    margin: 10px;
    /* 원하는 스타일을 추가할 수 있습니다 */
}
</style>
