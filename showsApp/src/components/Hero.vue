<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['selectShow'])
const { isStrangerThings } = defineProps([
    'isStrangerThings'
])
const emitSelectedShow = () => {
    emit('selectShow')
}
</script>

<template>
    <div class="hero">
        <h1>{{ isStrangerThings ? 'Stranger things' : 'Rick and Morty' }}</h1>
        <p @click="emitSelectedShow">{{ isStrangerThings ? 'Rick and Morty' : 'Stranger things' }}</p>
    </div>
</template>

<style scoped>
.hero {
    height : 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column
}

.hero img {
    position: absolute;
    height: 700px;
    opacity: 0.1;
}

.hero h1 {
    font-size: 100px;
    font-weight: bold;
}

.hero p {
    cursor: pointer;
}
</style>