<script setup>
import { useNumbersStore } from '../stores/numbers';
import useNumbers from '../composables/useNumbers';
import GreatGrandChild from './GreatGrandChild.vue';

const {numbers, doubleNumber} = useNumbersStore()
</script>

<template>
<main>
    <div>
        <h1>Grand Child component {{ doubleNumber }}</h1>
        <div class="line"></div>
        <GreatGrandChild />
    </div>
</main>
</template>