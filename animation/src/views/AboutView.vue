<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vel magnam repellendus earum dolor tempora maiores id praesentium. Enim itaque beatae ex animi, deserunt cumque amet ea id mollitia iusto!</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    margin: 10px auto;
  }

  .about h1 {
    position: absolute;
    justify-content: center;
  }

  .about p {
    position: relative;
    margin-top: 20%;
  }
}
</style>
