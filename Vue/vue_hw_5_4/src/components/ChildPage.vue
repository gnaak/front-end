<template>
    <div>
        <p v-for="(child,index) in children" id="child" :key="index">
        <h3><strong>자식 페이지입니다.</strong></h3>
            <p>
                이름 : {{child.name}}
            </p>
            <p>
                나이 : {{child.age }}
            </p>
            <p>
                용돈 : {{child.balance }}
            </p>
            <button type="submit" @click="$emit('giveMeAllowanceEvent', index)">용돈 주세요.</button>
        </p>
    </div>
</template>

<script setup>
const child = defineProps({
    children : Array
})

const emit = defineEmits(['giveMeAllowanceEvent'])
</script>

<style scoped>
#child {
    /* border: 1px solid rgb(196, 194, 194); */
    margin:10px;
}
p {
    margin: 10px;
}
h3{
    margin: 10px;
}
button{
    margin: 10px;
}
</style>