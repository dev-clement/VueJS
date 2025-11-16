<script setup>
import cars from "../data/cars.json"
import { RouterLink } from "vue-router";
</script>

<template>
    <div>Home View !</div>
    <div class="cars">
        <RouterLink :to="`/cars/${car.id}`" v-for="car in cars" :key="car.id" href="">
            {{ car.name }}
        </RouterLink>
    </div>
</template>

<style scoped>
    .cars {
        display: flex;
    }

    .cars a {
        text-decoration: none;
        color: white;
        width: 100%;
        box-shadow: 1px 1px 10px rgba(219, 218, 218, 0.388);
        margin: 10px;
    }

</style>