<template>
    <h1>pinia 연습하기</h1>
    <div class="bc">
            <ParentPage
            v-for="member in members.familyInfo"
            :key="member.id"
            :memberData="member"
            />
    </div>
</template>

<script setup>
import ParentPage from '@/components/ParentPage.vue';
import {useFamilyStore} from '@/stores/family'
const members = useFamilyStore()
</script>

<style scoped>

.bc{
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>