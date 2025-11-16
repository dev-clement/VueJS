<script setup>
import { inject } from 'vue';


const numbers = inject('numbers')

const addNumber = (num) => {
    numbers.value.push(num)
}
</script>

<template>
<main>
    <div>
        <h1>Great Grand Child Component {{ numbers }}</h1>
        <button @click="addNumber(4)">add</button>
        <div class="line"></div>
    </div>
</main>
</template>