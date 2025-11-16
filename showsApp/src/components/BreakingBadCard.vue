<script setup>
import axios from 'axios';
import Card from './Card.vue'
import { ref, watch } from 'vue';

const characters = ref(null)
const page = ref(0)

const response = await axios.get('https://stranger-things-api.fly.dev/api/v1/characters?perPage=3&page=1')
characters.value = response.data

watch(page, async () => {
    const res = await axios.get(`https://stranger-things-api.fly.dev/api/v1/characters?perPage=3&page=${page.value * 3}`)
    characters.value = res.data
})
</script>

<template>
    <div class="container">
        <div class="cards">
            <Card 
                v-for="character in characters"
                :key="character._id"
                :photo="character.photo"
                :name="character.name"
            >
                <div class="jobs">
                    <p v-for="(job, idx) in character.occupation" :key="job">
                        {{ job }}<span v-if="idx < character.occupation.length - 1">,&nbsp</span>
                    </p>
                </div>
            </Card>
        </div>
        <div class="button-container">
            <button @click="page--">&lt</button>
            <button @click="page++">></button>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: rgb(27, 26, 26);
    padding: 3em;
    height: 38em;
    margin: 3em 0 0; 
}
.cards {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
.cards h3 {
    font-weight: bold;
}
.cards p {
    font-size: 10px;
}
.jobs {
    display: flex;
    flex-wrap: wrap;
}
p {
    font-size: 10px;
}
.button-container {
    display: flex;
    justify-content: center;
    padding-top: 30px
}
.button-container button {
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
}
.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>