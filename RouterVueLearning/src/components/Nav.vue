<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <div>
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <RouterLink active-class="active" to="/about">About</RouterLink>
    </div>
</template>

<style scoped>
    .active {
        font-weight: 900;
        color: rgba(153, 104, 14);
    }
</style>