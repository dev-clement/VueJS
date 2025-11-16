<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="nav">
        <RouterLink class="link" active-class="active" to="/">Home</RouterLink>
    </div>
</template>

<style scoped>
.active {
    font-weight: 900;
    color: rgba(153, 104, 14)
}

.link {
    margin-right: 30px;
}

.nav {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
</style>