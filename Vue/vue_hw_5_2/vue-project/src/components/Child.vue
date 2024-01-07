<template>
    <div>
        <p v-for="child in children" id="child">
        <h3><strong>자식 페이지입니다.</strong></h3>
        <p>
            이름 : {{child.name}}
        </p>
        <p>
            나이 : {{child.age }}
        </p>
            
        </p>
    </div>
</template>

<script setup>
const child = defineProps({
    children : String
})
</script>

<style scoped>
#child {
    border: 1px solid rgb(196, 194, 194);
    margin:10px;
}
p {
    margin: 10px;
}
h3{
    margin: 10px;
}
</style>