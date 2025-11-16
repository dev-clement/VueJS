<script setup>
const {numbers} = defineProps(['numbers'])
</script>

<template>
<main>
    <div>
        <h1>Great Grand child Component {{ numbers }}</h1>
    </div>
</main>
</template>