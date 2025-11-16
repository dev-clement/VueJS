
<script setup>
import { useNumbersStore } from '../stores/numbers';

const {numbers, filterNum} = useNumbersStore()
</script>

<template>
<main>
    <div>
        <h1>Great GrandChild component {{ filterNum(5) }}</h1> 
    </div>    
</main>
</template>