<template>
    <div v-for="child in childrenData" class="sc">
        <h5>
            자식 페이지
        </h5>
        <p>
            {{ child.name }}
        </p>
        </div>
        
</template>

<script setup>
import {useFamilyStore} from '@/stores/family'
defineProps({
    childrenData: Object
});

const familyInfo = useFamilyStore()

</script>

<style scoped>
.sc{
    background-color: white;
    width: 70%;
    border: black 1px solid;
    text-align: center;
    margin: 10px;
}
</style>