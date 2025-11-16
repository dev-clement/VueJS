<script setup>
import GrandChild from './GrandChild.vue';

const {numbers} = defineProps(['numbers'])
</script>

<template>
<main>
    <div>
        <h1>Child component {{ numbers }}</h1>
        <div class="line"></div>
        <GrandChild :numbers="numbers" />
    </div>
</main>
</template>