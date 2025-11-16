<script setup>
import q from '../data/data.json'
import Card from '../Components/Card.vue'
import {ref, watch} from 'vue'
import gsap from 'gsap'

const quizes = ref(q)
const search = ref("")

watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})

const beforeEnter = elem => {
    // card-enter-from
    elem.style.opacity = 0
    elem.style.transform = "translateY(-100px)"
}

const enter = element => {
    gsap.to(element, {
        y: 0
        , opacity: 1
        , duration: 0.2
        , delay: element.dataset.index * 0.3
    })
}

const afterEnter = () => {
}
</script>

<template>
    <div class="container">
        <header>
            <h1>Quizz</h1>
            <input v-model.trim="search" type="text" placeholder="search...">
        </header>
        <div class="option-container">
            <TransitionGroup 
                appear=""
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
            >
                <Card 
                    v-for="(quiz, index) in quizes"
                    :key="quiz.id"
                    :quiz="quiz"
                    :data-index="index"
                />
            </TransitionGroup>
        </div>
    </div>
</template>

<style scoped>
header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
}

header h1 {
    font-weight: bold;
    margin-right: 30px;
}

header input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 1px;
}

.option-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}

/* CARD */

/*.card-enter-from {
    transform: translateY(-50px);
    opacity: 0;
}

.card-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.card-enter-active {
    transition: all 0.4s ease;
}*/
</style>