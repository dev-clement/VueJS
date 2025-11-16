<script setup>
import Question from '../Components/Question.vue'
import QuizzHeader from '../Components/QuizzHeader.vue'
import Result from '../Components/Result.vue'
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import quizes from '../data/data.json'

const route = useRoute()
const quizId = parseInt(route.params.id)
const quiz = quizes.find(q => q.id == quizId)
const currQuestionIdx = ref(0)
const numberOfCorrectAnswer = ref(0)
const showResult = ref(false)

const questionStatus = computed(() => `${currQuestionIdx.value}/${quiz.questions.length}`)
const barPercentage = computed(() => `${currQuestionIdx.value/quiz.questions.length * 100}%`)

const onOptionSelected = isCorrect => {
    if (isCorrect) {
        numberOfCorrectAnswer.value += 1
    }
    if (quiz.questions.length - 1 === currQuestionIdx.value) {
        showResult.value = true
    } 
    currQuestionIdx.value += 1
}

</script>

<template>
    <div class="question-container">
        <QuizzHeader 
            :questionStatus="questionStatus" 
            :barPercentage="barPercentage" />
        <div>
            <Question 
                v-if="!showResult" 
                :question="quiz.questions[currQuestionIdx]"
                @selectOption="onOptionSelected"
            />
            <Result 
                v-else
                :quizQuestionLength="quiz.questions.length"
                :numberOfCorrectAnswer="numberOfCorrectAnswer"
            />
        </div>
    </div>
</template>

<style scoped>
.question-container {
    margin-top: 20px;
    max-width: 1000px;
    margin: 0 auto;
}
</style>