<script setup>
import Question from '../Components/Question.vue'
import QuizzHeader from '../Components/QuizzHeader.vue'
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import quizes from '../data/data.json'

const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = quizes.find(q => q.id == quizId)
const currQuestionIdx = ref(0)

//const questionStatus = ref(`${currQuestionIdx.value}/${quiz.questions.length}`)

//watch(() => currQuestionIdx.value, () => {
//    questionStatus.value = `${currQuestionIdx.value}/${quiz.questions.length}`
//})

const questionStatus = computed(() => `${currQuestionIdx.value}/${quiz.questions.length}`)
const barPercentage = computed(() => `${currQuestionIdx.value/quiz.questions.length * 100}%`)

</script>

<template>
    <div class="question-container">
        <QuizzHeader 
            :questionStatus="questionStatus" 
            :barPercentage="barPercentage" />
        <div>
            <Question  
                :question="quiz.questions[currQuestionIdx]"/>
        </div>
        <button @click="currQuestionIdx++">Next question</button>
    </div>
</template>

<style scoped>
.question-container {
    margin-top: 20px;
    max-width: 1000px;
    margin: 0 auto;
}
</style>