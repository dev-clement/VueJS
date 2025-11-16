<script setup>
import GrandChild from './GrandChild.vue';
import useNumbers from '../composables/useNumbers';
import { useNumbersStore } from '../stores/numbers';

const {numbers, addNumber} = useNumbersStore()
</script>

<template>
<main>
    <div>
        <h1>Child component {{ numbers }}</h1>
        <button @click="addNumber(3)">Add nbr</button>
        <div class="line"></div>
        <GrandChild />
    </div>
</main>
</template>