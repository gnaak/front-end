<template>
    <div class="container">
        <h5>부모 컴포넌트</h5>
        <p>
            {{ memberData.father}}
        </p>
        <p>
            {{ memberData.mother}}
        </p>
        <ChildPage
        :childrenData="memberData.children"
        />
    </div>
</template>

<script setup>
import ChildPage from '@/components/ChildPage.vue'
import {useFamilyStore} from '@/stores/family'

const members = useFamilyStore()

defineProps({
    memberData:Object
})
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgray;
    width: 80%;
    margin: 10px;
    border: 1px darkgray solid;
}
</style>