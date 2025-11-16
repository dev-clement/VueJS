<script setup>
import RickMortyCard from './components/RickMortyCard.vue';
import BreakingBadCard from './components/BreakingBadCardSuspense.vue';
import Hero from './components/Hero.vue';
import { ref } from 'vue';

const isStrangerThings = ref(true)
</script>

<template>
  <main>
    <Hero 
      :isStrangerThings 
      @selectShow="isStrangerThings = !isStrangerThings" 
    />
    <KeepAlive>
      <component :is="isStrangerThings ? BreakingBadCard : RickMortyCard" />
    </KeepAlive>
  </main>
</template>

<style scoped>
.cards {
  height: 700px;
  background-color: rgba(27, 26, 26);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>