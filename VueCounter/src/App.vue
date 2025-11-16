<script setup>
  import { ref } from 'vue'

  const count = ref(0);

  console.log(count)
  const addToCount = () => {
    count.value++;
  }

  const subFromCount = () => {
    count.value--;
  }
</script>

<template>
  <main>
    <div>
      <h4>The current count is ...</h4>
      <h1>{{ count }}</h1>
      <button @click="subFromCount()">-</button>
      <button @click="addToCount()">+</button>
    </div>
  </main>
</template>

<style scoped>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    text-align: center;
  }
</style>