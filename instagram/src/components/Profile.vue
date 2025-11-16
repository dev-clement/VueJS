<script setup>
import Container from './Container.vue'
import ImageGallery from './ImageGallery.vue'
import Userbar from './Userbar.vue'
</script>

<template>
  <Container>
    <div class="profile-container">
      <Userbar
        username="Lauth Harb"
        :userInfo="{
          posts: 4,
          followers: 100,
          following: 342,
        }"
      />
      <ImageGallery
        :posts="[
          {
            id: 1,
            image:
              'https://media.gettyimages.com/id/968350196/photo/fortune-cookies-with-cartoon-eyes.jpg?s=612x612&w=gi&k=20&c=SDcT4931xlEPnTOlYtUTk1FPtKKH0VbR1w4QIhC9D0s=',
          },
          {
            id: 2,
            image:
              'https://media.gettyimages.com/id/968350196/photo/fortune-cookies-with-cartoon-eyes.jpg?s=612x612&w=gi&k=20&c=SDcT4931xlEPnTOlYtUTk1FPtKKH0VbR1w4QIhC9D0s=',
          },
        ]"
      />
    </div>
  </Container>
</template>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
}
</style>
