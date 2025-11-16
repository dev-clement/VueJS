<script setup>
import Card from './Card.vue'
import Container from './Container.vue'

const data = [
  {
    id: 1,
    username: 'Selena Gomez',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Selena_Gomez_at_the_2024_Toronto_International_Film_Festival_3_%28Cropped%29.jpg',
    caption: 'I like dick',
  },
  {
    id: 2,
    username: 'The Weekend',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/The_Weeknd_Portrait_by_Brian_Ziff.jpg/960px-The_Weeknd_Portrait_by_Brian_Ziff.jpg',
    caption: 'Hello Guys',
  },
]
</script>

<template>
  <Container>
    <div class="timeline-container">
      <Card v-for="post in data" :key="post.id" :post="post" />
    </div>
  </Container>
</template>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
}
</style>
