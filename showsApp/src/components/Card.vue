<script setup>
import { defineProps } from 'vue';

const { photo, name } = defineProps([
    'photo'
    , 'name'
])
</script>

<template>
    <n-card>
        <template #cover>
            <img :src="photo">
        </template>
        <h3>{{ name }}</h3>
        <slot></slot>
    </n-card>
</template>

<style scoped>
.n-card {
    width: 200px;
    margin: 10px 50px;
    height: 400px;

}
.n-card img {
    height: 250px
}
</style>