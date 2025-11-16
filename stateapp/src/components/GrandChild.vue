<script setup>
import GreatGrandChild from './GreatGrandChild.vue';

const {numbers} = defineProps(['numbers'])
</script>

<template>
<main>
    <div>
        <h1>GrandChild component</h1>
        <div class="line"></div>
        <GreatGrandChild :numbers="numbers" />
    </div>
</main>
</template>